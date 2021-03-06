import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    changeTableStatus: PropTypes.func,
    changeApiStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  setTableStatus(tableStatus, tableId) {
    const { changeTableStatus } = this.props;
    changeTableStatus({
      id: tableId,
      status: tableStatus,
    });
  }

  renderActions(status, id){
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => this.setTableStatus('thinking', id)}>thinking</Button>
            <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}><Button onClick={() => this.setTableStatus('new order', id)}>new order</Button></Link>
          </>
        );
      case 'thinking':
        return (
          <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}><Button onClick={() => this.setTableStatus('new order', id)}>new order</Button></Link>
        );
      case 'ordered':
        return (
          <Button onClick={() => this.setTableStatus('prepared', id)}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => this.setTableStatus('delivered', id)}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => this.setTableStatus('paid', id)}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => this.setTableStatus('free', id)}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Link to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}><Button>
                        {row.order}
                      </Button></Link>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status, row.id)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;

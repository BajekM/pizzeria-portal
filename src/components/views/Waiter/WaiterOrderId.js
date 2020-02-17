import React from 'react';
import styles from './WaiterOrderId.module.scss';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const demoContent = {
  table: '1',
  product: 'cake',
  option: 'cheesecake',
  price: '4$',
};


const WaiterOrderId = ({match}) => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Option</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{match.params.id}</TableCell>
          <TableCell>
            <div>{demoContent.table}</div>
            <TextField
              id="table"
              label="Table"
              type="number"
              defaultValue= {1}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 1,
                min: 1,
                max: 3,
              }}
            />
            <Button>Save</Button>
          </TableCell>
          <TableCell>{demoContent.product}</TableCell>
          <TableCell>{demoContent.option}</TableCell>
          <TableCell>{demoContent.price}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
);

WaiterOrderId.propTypes = {
  match: PropTypes.object,
};

export default WaiterOrderId;

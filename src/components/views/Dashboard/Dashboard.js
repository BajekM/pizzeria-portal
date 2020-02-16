import React from 'react';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {
    id: '1',
    tableNumber: '3',
    hour: '12:00',
    duration: '1.5',
    people: '4',
    starters: ['bread'],
  },
  {
    id: '2',
    tableNumber: '1',
    hour: '15:00',
    duration: '2',
    people: '5',
    starters: ['lemonWater'],
  },
  {
    id: '3',
    tableNumber: '2',
    hour: '19:00',
    duration: '3',
    people: '3',
    starters: [],
  },
];

const demoStatistics = {
  delivery: 34,
  local: 40,
};

const Dashboard = () => (
  <div className={styles.component}>
    <Paper className={styles.events}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table number</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Duration [h]</TableCell>
            <TableCell>People</TableCell>
            <TableCell>Starters</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.tableNumber}
              </TableCell>
              <TableCell>
                {row.hour}
              </TableCell>
              <TableCell>
                {row.duration}
              </TableCell>
              <TableCell>
                {row.people}
              </TableCell>
              <TableCell>
                {row.starters}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.statistics}>
      <TableHead>
        <TableRow>
          <TableCell>Delivery orders</TableCell>
          <TableCell>Local orders</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{demoStatistics.delivery}</TableCell>
          <TableCell>{demoStatistics.local}</TableCell>
        </TableRow>
      </TableBody>
    </Paper>
  </div>
);

export default Dashboard;

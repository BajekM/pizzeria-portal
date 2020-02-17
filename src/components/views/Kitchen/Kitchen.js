import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {
    id: 1,
    status: 'In progress',
    product: 'breakfast',
    option: 'latte',
  },
  {
    id: 'D23',
    status: 'In progress',
    product: 'cake',
    option: '-',
  },
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table/Delivery Number</TableCell>
          <TableCell>Status</TableCell>
          <TableCell colSpan={2}>Products with options</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.option}</TableCell>
            <TableCell><Button>Done</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;

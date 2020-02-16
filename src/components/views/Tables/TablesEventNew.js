import React from 'react';
import styles from './TablesBookingId.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const TablesEventsNew = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Hour</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Repeat</TableCell>
          <TableCell>Duration [h]</TableCell>
          <TableCell>People</TableCell>
          <TableCell>Starters</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <TextField
              id="id"
              label="Id"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button>Save</Button>
          </TableCell>
          <TableCell>
            <TextField
              id="date"
              label="Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button>Save</Button>
          </TableCell>
          <TableCell>
            <TextField
              id="time"
              label="Hour"
              type="time"
              defaultValue="12:00"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 1800,
              }}
            />
            <Button>Save</Button>
          </TableCell>
          <TableCell>
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
          <TableCell>
            <TextField
              id="repeat"
              label="Repeat"
              type="text"
              defaultValue= {'daily'}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button>Save</Button>
          </TableCell>
          <TableCell>
            <TextField
              id="duration"
              label="Duration"
              type="number"
              defaultValue= {1}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 0.5,
                min: 0.5,
                max: 9,
              }}
            />
            <Button>Save</Button>
          </TableCell>
          <TableCell>
            <TextField
              id="people"
              label="People"
              type="number"
              defaultValue= {1}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 1,
                min: 1,
                max: 9,
              }}
            />
            <Button>Save</Button>
          </TableCell>
          <TableCell>
            <TextField
              id="starters"
              label="Starters"
              type="text"
              defaultValue= {'bread'}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button>Save</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
);

export default TablesEventsNew;

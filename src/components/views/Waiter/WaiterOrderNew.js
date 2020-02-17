import React from 'react';
import styles from './WaiterOrderId.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const demoContent = {
  table: '1',
  product: 'cake',
  option: [
    {
      name: 'cheesecake',
      price: '4$',
    },
    {
      name: 'apple pie',
      price: '3$',
    },
    {
      name: 'cinnamon rolls',
      price: '2$',
    },
    {
      name: 'chocolate cake',
      price: '4$',
    },
  ],
  price: '4$',
};

const WaiterOrderNew = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Option</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
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
          <TableCell>
            <FormControl component="fieldset">
              <FormLabel component="legend">Cake</FormLabel>
              <RadioGroup aria-label="cakes" name="cakes">
                {demoContent.option.map(option => (
                  <FormControlLabel key={option.name}
                    value={option.name}
                    control={<Radio color="primary" />}
                    // eslint-disable-next-line no-useless-concat
                    label={`${option.name}` + ' ' + '(' + `${option.price}` + ')'}
                    labelPlacement="end"
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </TableCell>
          <TableCell>{demoContent.price}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
);

export default WaiterOrderNew;

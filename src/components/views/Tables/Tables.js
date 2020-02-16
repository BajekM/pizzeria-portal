import React from 'react';
import styles from './Tables.module.scss';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


const Tables = () => (
  <div className={styles.component}>
    <form  noValidate>
      <TextField
        id="date"
        label="Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Link to={`${process.env.PUBLIC_URL}/tables/event/new`}>
        <Button>
          New event
        </Button>
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
        <Button>
          New booking
        </Button>
      </Link>

    </form>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell rowSpan={2}>Time</TableCell>
            <TableCell colSpan={2}>
              Table 1
            </TableCell>
            <TableCell colSpan={2}>
              Table 2
            </TableCell>
            <TableCell colSpan={2}>
              Table 3
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Events</TableCell>
            <TableCell>Bookings</TableCell>
            <TableCell>Events</TableCell>
            <TableCell>Bookings</TableCell>
            <TableCell>Events</TableCell>
            <TableCell>Bookings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>12:00</TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/booking/123`}><Button>
                123
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/event/789`}><Button>
                789
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12:30</TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/booking/123`}><Button>
                123
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/event/789`}><Button>
                789
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>13:00</TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/booking/123`}><Button>
                123
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/event/789`}><Button>
                789
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>13:30</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>14:00</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/booking/456`}><Button>
                456
              </Button></Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>14:30</TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/event/123`}><Button>
                123
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/booking/456`}><Button>
                456
              </Button></Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>15:00</TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/event/123`}><Button>
                123
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/booking/456`}><Button>
                456
              </Button></Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>15:30</TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/event/123`}><Button>
                123
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/booking/456`}><Button>
                456
              </Button></Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>16:00</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/event/456`}><Button>
                456
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>16:30</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/event/456`}><Button>
                456
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>17:00</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/event/456`}><Button>
                456
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>17:30</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/event/456`}><Button>
                456
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>18:00</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/event/456`}><Button>
                456
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>18:30</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/event/456`}><Button>
                456
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>19:00</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>19:30</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>20:00</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/booking/789`}><Button>
                789
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>20:30</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/booking/789`}><Button>
                789
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>21:00</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/booking/789`}><Button>
                789
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>21:30</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/booking/789`}><Button>
                789
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>22:00</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Link to={`${process.env.PUBLIC_URL}/tables/booking/789`}><Button>
                789
              </Button></Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>22:30</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>23:00</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>23:30</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>24:00</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Tables;

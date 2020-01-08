import React from 'react';
import MainLayout from './../src/components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/Waiter';

import WaiterOrderNew from './components/views/Waiter/WaiterOrderNew';
import WaiterOrderId from './components/views/Waiter/WaiterOrderId';
import TablesBookingId from './components/views/Tables/TablesBookingId';
import TablesBookingNew from './components/views/Tables/TablesBookingNew';
import TablesEventId from './components/views/Tables/TablesEventsId';
import TablesEventNew from './components/views/Tables/TablesEventNew';


function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderNew} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrderId} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingId} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/event/new'} component={TablesEventNew} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={TablesEventId} />

        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

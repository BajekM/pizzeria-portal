import React from 'react';
import styles from './Tables.scss';
import {Link} from 'react-router-dom';


const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>TablesBookingNew</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/456efg`}>TablesBookingId</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/new`}>TablesEventNew</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/event/789hij`}>TablesEventId</Link>
  </div>
);

export default Tables;

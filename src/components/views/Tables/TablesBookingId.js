import React from 'react';
// import styles from './TablesBookingId.scss';
import PropTypes from 'prop-types';


const TablesBookingId = ({match}) => (
  <div>
    <h2>TablesBookingId view</h2>
    {match.params.id}
  </div>
);

TablesBookingId.propTypes = {
  match: PropTypes.object,
};

export default TablesBookingId;

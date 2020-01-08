import React from 'react';
// import styles from './WaiterOrderId.scss';
import PropTypes from 'prop-types';


const WaiterOrderId = ({match}) => (
  <div>
    <h2>WaiterOrderId view</h2>
    {match.params.id}
  </div>
);

WaiterOrderId.propTypes = {
  match: PropTypes.object,
};

export default WaiterOrderId;

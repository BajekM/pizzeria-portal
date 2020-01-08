import React from 'react';
// import styles from './TablesEventsId.scss';
import PropTypes from 'prop-types';


const TablesEventsId = ({match}) => (
  <div>
    <h2>TablesEventsId view</h2>
    {match.params.id}
  </div>
);

TablesEventsId.propTypes = {
  match: PropTypes.object,
};

export default TablesEventsId;

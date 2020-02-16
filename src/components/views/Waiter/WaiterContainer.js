import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, changeStatus } from '../../../redux/tablesRedux';

const mapStateToProps = (state, props) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
  // table: getTable(state, props.id),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeTableStatus: (obj) => dispatch(changeStatus(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);

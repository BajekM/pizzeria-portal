import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, fetchToAPI, getLoadingState, changeStatus } from '../../../redux/tablesRedux';

const mapStateToProps = (state, props) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeTableStatus: (obj) => dispatch(changeStatus(obj)),
  changeApiStatus: () => dispatch(fetchToAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);

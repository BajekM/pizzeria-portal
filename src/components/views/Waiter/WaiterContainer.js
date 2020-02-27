import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, changeStatusRequest } from '../../../redux/tablesRedux';

const mapStateToProps = (state, props) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeTableStatus: obj => dispatch(changeStatusRequest(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);

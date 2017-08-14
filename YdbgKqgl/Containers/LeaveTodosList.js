import { connect } from 'react-redux';
import { todofetchLeaves,todoOnEndReach } from '../Redux/LeavesRedux';
import LeaveTodosList from '../Components/LeaveTodosList';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = state => ({
    Todos:state.Leaves.Todos,
    refreshing: state.refreshing,
    loading: state.loading,
    page:state.page,
    totalPage:state.totalPage,
});

const mapDispatchToProps = dispatch => ({
    todofetchLeaves: refreshing => dispatch(todofetchLeaves(refreshing)),
    todoOnEndReach:loading => dispatch(todoOnEndReach(loading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaveTodosList);
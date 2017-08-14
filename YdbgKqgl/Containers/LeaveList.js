import { connect } from 'react-redux';
import {  _onRefresh,_onEndreached } from '../Redux/LeavesRedux';
import LeaveList from '../Components/LeaveList';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = state => ({
    Datas: state.Leaves.Datas,
    refreshing: state.refreshing,
    loading: state.loading,
    page:state.page,
    totalPage:state.totalPage,
});

const mapDispatchToProps = dispatch => ({
    _onRefresh: refreshing => dispatch(_onRefresh(refreshing)),
    _onEndreached:loading => dispatch(_onEndreached(loading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaveList);
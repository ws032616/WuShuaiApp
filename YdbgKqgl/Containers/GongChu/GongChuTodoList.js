import { connect } from 'react-redux';
import { fetchTodosGongChu,gongChuOnEndreached } from '../../Redux/LeavesRedux';
import GongChuTodoList from '../../Components/GongChu/GongChuTodoList';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = state => ({
    Todos: state.Leaves.Todos,
    refreshing: state.refreshing,
    loading: state.loading,
    page:state.page,
    totalPage:state.totalPage,
});

const mapDispatchToProps = dispatch => ({
    fetchTodosGongChu: refreshing => dispatch(fetchTodosGongChu(refreshing)),
    gongChuOnEndreached:loading => dispatch(gongChuOnEndreached(loading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GongChuTodoList);
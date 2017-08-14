import { connect } from 'react-redux';
import { fetchTodosGongChu,gongChuOnEndreached } from '../../Redux/LeavesRedux';
import GongChuList from '../../Components/GongChu/GongChuList';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = state => ({
    Datas: state.Leaves.Datas,
    refreshing: state.refreshing,
    loading: state.loading,
    page:state.page,
    totalPage:state.totalPage,
});

const mapDispatchToProps = dispatch => ({
    fetchTodosGongChu: refreshing => dispatch(_onRefresh(refreshing)),
    gongChuOnEndreached:loading => dispatch(_onEndreached(loading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GongChuList);
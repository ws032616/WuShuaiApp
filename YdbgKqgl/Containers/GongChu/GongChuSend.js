import { connect } from 'react-redux';
import GongChuSend from '../../Components/GongChu/GongChuSend';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = state => ({
    Todo: state.Leaves.Todo
});

export default connect(mapStateToProps)(GongChuSend);
import { connect } from 'react-redux';
import LeaveSend from '../Components/LeaveSend';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = state => ({
    Todo: state.Leaves.Todo
});

export default connect(mapStateToProps)(LeaveSend);
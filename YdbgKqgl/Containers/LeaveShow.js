import { connect } from 'react-redux';
import LeaveShow from '../Components/LeaveShow';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = state => ({
    Data: state.Leaves.Data
});

export default connect(mapStateToProps)(LeaveShow);
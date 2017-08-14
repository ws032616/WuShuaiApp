import { connect } from 'react-redux';
import AddLeavePanel from '../Components/AddLeavePanel';
import { addLeave, changeInputTitle } from '../Redux/LeavesRedux';

const mapStateToProps = state => ({
    title: state.Leaves.title,
});

const mapDispatchToProps = (dispatch, state) => ({
    onRequestAddLeave: title => dispatch(addLeave(title)),
    onTtileChange: title => dispatch(changeInputTitle(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLeavePanel);

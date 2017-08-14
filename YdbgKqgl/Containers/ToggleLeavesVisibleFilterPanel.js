import { connect } from 'react-redux';
import ToggleLeavesVisibleFilterPanel from '../Components/ToggleLeavesVisibleFilterPanel';
import { toggleLeavesVisibleFilter } from '../Redux/LeavesRedux';

const mapStateToProps = state => ({
    filter: state.Leaves.filter,
});

const mapDispatchToProps = dispatch => ({
    onFilterChange: (filter) => dispatch(toggleLeavesVisibleFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleLeavesVisibleFilterPanel);
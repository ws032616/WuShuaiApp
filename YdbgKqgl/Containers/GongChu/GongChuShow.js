import { connect } from 'react-redux';
import GongChuShow from '../../Components/GongChu/GongChuShow';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = state => ({
    Data: state.Leaves.Data
});

export default connect(mapStateToProps)(GongChuShow);
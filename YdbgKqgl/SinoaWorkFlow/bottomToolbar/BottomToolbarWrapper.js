import BottomToolbar from './BottomToolbar';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  dispatch,
});
const mapStateToProps = (state, props) => ({
  ...props,
});

// .requestParam  .data

const BottomToolbarWrapper = connect(mapStateToProps, mapDispatchToProps)(
  BottomToolbar,
);

export default BottomToolbarWrapper;

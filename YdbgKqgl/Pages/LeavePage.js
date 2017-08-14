import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { fetchLeaves,showLeave } from '../Redux/LeavesRedux';
import LeaveList from '../Containers/LeaveList';
/* import AddLeavePanel from '../Containers/AddLeavePanel'; */
/* import ToggleLeavesVisibleFilterPanel from '../Containers/ToggleLeavesVisibleFilterPanel'; */

class LeavePage extends Component {
  static navigationOptions = {
    title: '请假列表',
  };
  componentDidMount() {
    this.props.dispatch(fetchLeaves());
  };
  Touchable(LeaveName,LeaveId){
    this.props.dispatch(showLeave(LeaveId));
    const { navigate } = this.props.navigation;
    navigate(LeaveName,LeaveId);
  };
  render() {
    const { dispatch } = this.props;
    return (<View>
        <LeaveList 
        onItemPress={(LeaveName,LeaveId) =>this.Touchable(LeaveName,LeaveId)} />
    </View>);
  }
}

export default connect(state => ({}))(LeavePage);

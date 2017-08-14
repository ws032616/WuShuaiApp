import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { fetchLeaves,showLeave } from '../Redux/LeavesRedux';
import LeaveTodosList from '../Containers/LeaveTodosList';

class LeaveTodosPage extends Component {
  static navigationOptions = {
    title: '请假待办列表',
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
        <LeaveTodosList 
        onItemPress={(LeaveName,LeaveId) =>this.Touchable(LeaveName,LeaveId)} />
    </View>);
  }
}

export default connect(state => ({}))(LeaveTodosPage);

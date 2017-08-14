import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import LeaveShow from '../Containers/LeaveShow';

class LeaveShowPage extends Component {
  static navigationOptions = {
    title: '请假详情',
  };
  render() {
    const { dispatch } = this.props;
    return (<View>
        <LeaveShow/>
    </View>);
  }
}

export default connect(state => ({}))(LeaveShowPage);

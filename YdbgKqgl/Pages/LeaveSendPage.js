import React, { Component } from 'react';
import { View } from 'react-native';
import { connect,Provider } from 'react-redux';
import LeaveSend from '../Containers/LeaveSend';
import { Button } from 'react-native-sinoui';

class LeaveSendPage extends Component {
  static navigationOptions = {
    title: '请假详情',
     headerRight: (
    <Provider >
      <Button form="LeaveShow" round >发送</Button>
    </Provider>
  ),
  };
  render() {
    const { dispatch } = this.props;
    return (<View>
        <LeaveSend/>
    </View>);
  }
}

export default connect(state => ({}))(LeaveSendPage);

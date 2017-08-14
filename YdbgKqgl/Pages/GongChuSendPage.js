import React, { Component } from 'react';
import { View } from 'react-native';
import { connect,Provider } from 'react-redux';
import GongChuSend from '../Containers/GongChu/GongChuSend';
import { Button } from 'react-native-sinoui';

class GongChuSendPage extends Component {
  static navigationOptions = {
    title: '公出详情',
     headerRight: (
    <Provider >
      <Button form="LeaveShow" round >发送</Button>
    </Provider>
  ),
  };
  render() {
    const { dispatch } = this.props;
    return (<View>
        <GongChuSend/>
    </View>);
  }
}

export default connect(state => ({}))(GongChuSendPage);

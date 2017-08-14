import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import GongChuShow from '../Containers/GongChu/GongChuShow';

class GongChuShowPage extends Component {
  static navigationOptions = {
    title: '公出详情',
  };
  render() {
    const { dispatch } = this.props;
    return (<View>
        <GongChuShow/>
    </View>);
  }
}

export default connect(state => ({}))(GongChuShowPage);

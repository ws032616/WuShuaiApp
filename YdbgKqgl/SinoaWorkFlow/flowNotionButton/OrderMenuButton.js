// @flow
import React, { Component } from 'react';
import {
  View,
  Button,
  MenuButton,
  Menu,
  Icon,
  Item,
} from 'react-native-sinoui';

export default class OrderMenuButton extends Component {
  state: {
    mVisible: boolean,
  };
  constructor() {
    super();
    this.state = {
      mVisible: false,
      sort: 'node',
    };
  }

  onItemPress = () => {
    this.setState({
      mVisible: false,
    });
  };
  render() {
    return (
      <MenuButton
        leftward
        downward
        align="bottom"
        onMenuChangeVisible={mVisible =>
          this.setState({
            mVisible,
          })}
        menuVisible={this.state.mVisible}
      >
        <Button header>排序</Button>
        <Menu>
          <Item
            onPress={() => {
              this.setState({ sort: 'node' });
              this.props.onChangeOrderBy && this.props.onChangeOrderBy('node');
              this.onItemPress();
            }}
          >
            <Icon itemLeft name="menu" />
            节点排序
          </Item>
          <Item
            onPress={() => {
              this.setState({ sort: 'time' });
              this.props.onChangeOrderBy && this.props.onChangeOrderBy('time');
              this.onItemPress();
            }}
          >
            <Icon itemLeft name="clock" />
            时间排序
          </Item>
        </Menu>
      </MenuButton>
    );
  }
}

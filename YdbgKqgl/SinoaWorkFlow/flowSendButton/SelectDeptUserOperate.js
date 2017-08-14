// @flow
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-sinoui';
import {
  CheckBoxGroup,
  Label,
  CheckBox,
  RadioGroup,
  Radio,
} from 'react-native-sinoui/form';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    padding: 10,
  },
  radioContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default class SelectDeptUserOperate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUsers: [],
      order: '1',
      orders: [
        {
          text: '同时办',
          value: '1',
          ifchecked: true,
          show: true,
        },
        {
          text: '顺序办',
          value: '2',
          ifchecked: false,
          show: true,
        },
      ],
    };
  }

  props: {
    workflowResponse: Object,
    onPress: Function,
    onChange: Function,
  };
  send = () => {
    this.props.onPress(this.props.workflowResponse);
  };

  setParam = selectUsers => {
    if (this.props.workflowResponse.more) {
      this.props.workflowResponse.selectuserlist = [
        this.props.workflowResponse.wfoperateid,
        '=|$|',
        selectUsers[0],
        '|$|',
      ].join('');
      for (let i = 1; i < selectUsers.length; i++) {
        this.props.workflowResponse.selectuserlist = this.props.workflowResponse.selectuserlist.concat(
          `${selectUsers[i]}|$|`,
        );
      }
      this.props.workflowResponse.selectuserlist = this.props.workflowResponse.selectuserlist.concat(
        `#${this.state.order},`,
      );
    } else {
      this.props.workflowResponse.selectuserlist = [
        this.props.workflowResponse.wfoperateid,
        '=|$|',
        selectUsers[0],
        '|$|#,',
      ].join('');
    }
    this.props.onChange(this.props.workflowResponse);
  };
  // 渲染之前有个数据的排序
  render() {
    const keys = Object.keys(this.props.workflowResponse.deptUserMap);
    return (
      <ScrollView style={styles.container}>
        <CheckBoxGroup
          onChangeValue={value => {
            this.setState({ selectedUsers: value });
            this.setParam(value);
          }}
        >
          {keys.map(key =>
            <CheckBoxGroup.Item>
              <Label>
                {this.props.workflowResponse.deptUserMap[key]}
              </Label>
              <CheckBox value={key} />
            </CheckBoxGroup.Item>,
          )}
        </CheckBoxGroup>
        <RadioGroup
          style={styles.radioContainer}
          value={this.state.order}
          onChangeValue={value => this.setState({ order: value })}
        >
          {this.state.orders.map(item =>
            <RadioGroup.Item>
              <Label>
                {item.text}
              </Label>
              <Radio value={item.value} />
            </RadioGroup.Item>,
          )}
        </RadioGroup>
        <View style={styles.buttonContainer}>
          <Button
            block
            disabled={!this.state.selectedUsers}
            onPress={this.send}
          >
            下一步
          </Button>
        </View>
      </ScrollView>
    );
  }
}

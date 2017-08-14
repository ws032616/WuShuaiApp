// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-sinoui';
import { RadioGroup, Label, Radio } from 'react-native-sinoui/form';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    padding: 10,
  },
});

export default class SelectRoleOperate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: '',
    };
  }
  state: {
    value: any,
  };
  props: {
    workflowResponse: Object,
    onPress: Function,
    onChange: Function,
  };
  select = () => {
    const keys = Object.keys(this.props.workflowResponse.selectRoleMap);
    if (keys.includes(this.state.selectValue)) {
      keys.map(key => {
        if (key === this.state.selectValue) {
          this.props.workflowResponse.wfleveid = key;
          this.props.workflowResponse.flag = 'selectoperate';
        }
      });
      this.props.onChange(this.props.workflowResponse);
    }
  };

  send = () => {
    this.props.onPress(this.props.workflowResponse);
  };

  render() {
    const items = Object.keys(this.props.workflowResponse.selectRoleMap);
    return (
      <View style={styles.container}>
        <RadioGroup
          onChangeValue={selectValue => {
            this.setState({ selectValue });
            this.select();
          }}
        >
          {items.map(item =>
            <RadioGroup.Item key={item}>
              <Label>
                {this.props.workflowResponse.selectRoleMap[item]}
              </Label>
              <Radio value={item} />
            </RadioGroup.Item>,
          )}
        </RadioGroup>
        <View style={styles.buttonContainer}>
          <Button block disabled={!this.state.selectValue} onPress={this.send}>
            下一步
          </Button>
        </View>
      </View>
    );
  }
}

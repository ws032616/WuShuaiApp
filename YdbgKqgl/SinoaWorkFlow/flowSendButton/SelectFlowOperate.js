// @flow
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
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

export default class SelectFlowOperate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  props: {
    workflowResponse: Object,
    onPress: Function,
    onChange: Function,
  };
  select = value => {
    const keys = Object.keys(this.props.workflowResponse.wfoperationMap);
    keys.map(key => {
      const name = this.props.workflowResponse.wfoperationMap[key];
      if (name === value) {
        this.props.workflowResponse.wfoperateid = key;
        this.props.workflowResponse.wfoperatename = name;
      }
    });
    this.props.onChange(this.props.workflowResponse);
  };
  send = () => {
    this.props.onPress(this.props.workflowResponse);
  };

  render() {
    const keys = Object.keys(this.props.workflowResponse.wfoperationMap);
    return (
      <View style={styles.container}>
        <RadioGroup
          onChangeValue={value => {
            this.setState({ value });
            this.select(value);
          }}
        >
          {keys.map(key =>
            <RadioGroup.Item>
              <Label>
                {this.props.workflowResponse.wfoperationMap[key]}
              </Label>
              <Radio value={this.props.workflowResponse.wfoperationMap[key]} />
            </RadioGroup.Item>,
          )}
        </RadioGroup>
        <View style={styles.buttonContainer}>
          <Button block disabled={!this.state.value} onPress={this.send}>
            下一步
          </Button>
        </View>
      </View>
    );
  }
}

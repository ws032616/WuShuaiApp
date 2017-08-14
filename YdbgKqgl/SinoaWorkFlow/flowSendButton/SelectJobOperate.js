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

export default class SelectJobOperate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  state: {
    value: any,
  };
  props: {
    jobs: Object,
  };

  render() {
    const jobs = this.props.jobs;
    return (
      <View style={styles.container}>
        <RadioGroup
          onChangeValue={value => {
            this.setState({ value });
          }}
        >
          {jobs.map(job =>
            <RadioGroup.Item key={job.deptId}>
              <Label>
                {job.deptName}
              </Label>
              <Radio value={job.deptName} />
            </RadioGroup.Item>,
          )}
        </RadioGroup>
        <View style={styles.buttonContainer}>
          <Button block disabled={!this.state.value}>
            下一步
          </Button>
        </View>
      </View>
    );
  }
}

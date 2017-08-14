//@flow
import React, { Component } from 'react';
import { Form, FormItem, Input, Label } from 'react-native-sinoui/form';
import { Button, Modal, Header, Alert } from 'react-native-sinoui';
import { StyleSheet, View } from 'react-native';
import { createActionCreators } from 'sinooa-redux-workflow';

export default class WriteNotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showAlert: false,
      tempNotion: '',
      hasSaved: false,
    };
  }
  props: {
    content: string,
    updateTempNotion: () => void,
    saveNotion: () => void,
    saveCommonNotion: () => void,
    dispatch: () => void,
    DefaultWorkflowParam: any,
    show: boolean,
    updateShow: Function,
    updateContent: Function,
  };

  componentWillUpdate(nextProps) {
    if (
      !this.state.showAlert &&
      (nextProps.saveStatus === 'SUCCESS' || nextProps.saveStatus === 'FAILURE')
    ) {
      this.setState({ showAlert: true });
    }

    if (
      nextProps.saveStatus === 'SUCCESS' ||
      nextProps.saveStatus === 'FAILURE'
    ) {
      this.props.updateTempNotion(this.state.tempNotion || this.props.content);
    }
  }
  formatDate = date => {
    return `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
  save = () => {
    const stashNotion = this.state.tempNotion.replace(/<[^>]*>/g, '');
    const opinion = {
      recordId: this.props.DefaultWorkflowParam.recordId,
      flowTypeId: this.props.DefaultWorkflowParam.flowType,
      notionName: this.props.type || 'mynotion',
      notion: stashNotion === '' ? 'TRUE' : stashNotion,
      tableName: this.props.DefaultWorkflowParam.tableName,
      signFieldName: '',
      idFieldName: this.props.DefaultWorkflowParam.tableId,
    };
    const userId = '101008113102837'; // 贾天清
    opinion.signTime = this.formatDate(new Date()); // formatDate  , 'Y-m-d H:i:s'
    // 临时意见保存成功后做什么

    // return NotionService.saveTempNotion(opinion).then(function() {
    //   $scope.closeNotionModal();
    //   $scope.tempNotion.content = $scope.stashNotion.notion;
    //   DefaultWorkflowParam.setTempNotion($scope.tempNotion.type, _.isEmpty(stashNotion) ? 'TRUE' : stashNotion);
    //   if(notionConfig.tempNotion.generateSign) {
    //     $scope.tempNotion.tempSign = true;
    //   }
    // });

    this.props.saveNotion(opinion, userId);
    this.setState({ hasSaved: true });
  };
  render() {
    const message =
      this.props && this.props.saveStatus === 'SUCCESS' ? '保存意见成功' : '保存意见失败';
    return (
      <Modal isVisible={this.props.show}>
        <View style={{ flex: 1, backgroundColor: '#eee' }}>
          <Header
            title="签字意见"
            headerBackTitle="取消"
            headerBackButtonOnPress={show => {
              this.props.updateShow(false);
              this.setState({ hasSaved: false });
            }}
          />
          <Form>
            <FormItem>
              <Label />
              <Input
                type="text"
                multiline
                value={this.props.content}
                onChangeValue={value => {
                  this.setState({ tempNotion: value });
                  this.props.updateContent(value);
                }}
                textInputStyle={styles.textInput}
              />
            </FormItem>
            <Button block onPress={this.save} style={styles.button}>
              保存
            </Button>
            <Button
              block
              color="success"
              style={styles.button}
              onPress={() =>
                this.props.saveCommonNotion && this.props.saveCommonNotion()}
            >
              加为常用批示语
            </Button>
          </Form>
          <Alert
            visibleModal={this.state.showAlert && this.state.hasSaved}
            title="提示"
            message={message}
            buttons={['确定']}
            backdrop={false}
            onAlertChangeVisible={showAlert => {
              {
                this.setState({ showAlert });
              }
            }}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 16,
    marginRight: 16,
  },
  textInput: {
    minHeight: 60,
  },
});

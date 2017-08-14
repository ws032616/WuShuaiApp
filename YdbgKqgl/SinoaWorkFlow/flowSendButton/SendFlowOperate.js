// @flow
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Modal, Progress, Alert, Header, Button } from 'react-native-sinoui';
import { createActionCreators } from 'sinooa-redux-workflow';
import SelectFlowOperate from './SelectFlowOperate';
import SelectDeptUserOperate from './SelectDeptUserOperate';
import SelectRoleOperate from './SelectRoleOperate';
import SelectJobOperate from './SelectJobOperate';
import { withTheme } from 'styled-components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
class SendFlowOperate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  props: {
    workflowResponse: Object,
    sendStatus: string,
    dispatch: Function,
  };
  componentWillUpdate() {
    if (!this.state.show) {
      this.setState({ show: true });
    }
  }
  submit = requestParam => {
    const actionCreators = createActionCreators('workflow_status', 'send');
    this.props.dispatch(
      actionCreators.sendStart({
        requestParam: requestParam,
        flowType: requestParam.filetypeid,
        recordId: requestParam.recordid,
      }),
    );
  };
  setModalSelectValue = requestParam => {
    this.setState({ modalSelectValue: requestParam });
  };
  render() {
    if (this.props.sendStatus === 'DOING') {
      return (
        <Modal isVisible center>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Progress />
            <Text>发送中...</Text>
          </View>
        </Modal>
      );
    } else if (this.props.sendStatus === 'SUCCESS') {
      if (this.props.workflowResponse.flag) {
        let OperateComponent, headerTitle;
        if (this.props.workflowResponse.flag === 'selectdept') {
          OperateComponent = SelectFlowOperate;
          headerTitle = '选择流程操作';
        } else if (this.props.workflowResponse.flag === 'flowinstance') {
          OperateComponent = SelectDeptUserOperate;
          headerTitle = '选择人员';
        } else if (this.props.workflowResponse.flag === 'selectoption') {
          OperateComponent = SelectRoleOperate;
          headerTitle = '选择角色';
        } else if (this.props.workflowResponse.flag === 'selectJob') {
          OperateComponent = SelectJobOperate;
          headerTitle = '选择岗位';
        }

        return (
          <Modal isVisible={this.state.show}>
            <View
              style={[
                styles.container,
                { backgroundColor: this.props.theme.palette.grey[200] },
              ]}
            >
              <Header
                title={headerTitle}
                headerBackTitle="取消"
                headerBackButtonOnPress={() => {
                  this.setState({ show: false });
                }}
                headerRight={
                  <Button
                    clear
                    disabled={!this.state.modalSelectValue}
                    onPress={() => {
                      this.submit(this.state.modalSelectValue);
                    }}
                  >
                    下一步
                  </Button>
                }
              />
              <OperateComponent
                workflowResponse={this.props.workflowResponse}
                onPress={this.submit}
                onChange={this.setModalSelectValue}
              />
            </View>
          </Modal>
        );
      }
      const message = this.props.workflowResponse.success
        ? this.props.workflowResponse.info
        : `${this.props.workflowResponse.title}<br/>${this.props
            .workflowResponse.info}`;
      return (
        <Alert
          visibleModal={this.state.show}
          title="提示"
          message={message}
          buttons={['确定']}
          backdrop={false}
          onAlertChangeVisible={show => {
            this.setState({ show });
          }}
        />
      );
    } else if (this.props.sendStatus === 'FAILURE') {
      return (
        // todo
        // 如果是网络问题，则展示“请您连接手机网络”
        <Alert
          visibleModal={this.state.show}
          title="提示"
          message="发送失败！请您及时联系管理员修复！"
          buttons={['确定']}
          backdrop={false}
          onAlertChangeVisible={show => {
            this.setState({ show });
          }}
        />
      );
    }
    return null;
  }
}

export default withTheme(SendFlowOperate);

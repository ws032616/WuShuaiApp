import React from 'react';
import Form, {Input,FormItem, Label,reduxForm} from 'react-native-sinoui/reduxForm';
import { View, Alert,ScrollView, Text } from 'react-native';
import { Separator,Typography } from 'react-native-sinoui';
import {} from '';

function LeaveSend(props) {
  const Todo = props.Todo;
  return (
    <ScrollView>
        <Form>
          <Separator>请假信息</Separator>
          <FormItem>
            <Label>标题:</Label><Typography type="body2">{Todo.title}</Typography>
          </FormItem>
          <FormItem>
            <Label>拟稿人:</Label><Typography type="body2">{Todo.userName}</Typography>
          </FormItem>
          <FormItem>
            <Label>申请时间:</Label><Typography type="body2">{Todo.startTime} 至 {Todo.endTime}</Typography>
          </FormItem>
          <FormItem>
            <Label>请假日期:</Label><Typography type="body2">{Todo.userName}</Typography>
          </FormItem>
          <FormItem>
            <Label>休假种类:</Label><Typography type="body2">{Todo.xjTypeName}</Typography>
          </FormItem>
          <FormItem>
            <Label>是否倒休:</Label><Typography type="body2">{Todo.dx2}</Typography>
          </FormItem>
          <FormItem>
            <Label>请假时长:</Label><Typography type="body2">{Todo.days}(天)，共{Todo.hours}(小时);
              其中实际请假了{Todo.lastHour}(天)，共{Todo.qjhours}(小时);倒休了{Todo.qjhours}(小时)</Typography>
          </FormItem>
          <FormItem>
            <Label>请假部门:</Label><Typography type="body2">{Todo.deptName}</Typography>
          </FormItem>
          <FormItem>
            <Label>理由说明:</Label><Typography type="body2">{Todo.reason}</Typography>
          </FormItem>
          <FormItem>
            <Label>备注:</Label><Typography type="body2">{Todo.remark}</Typography>
          </FormItem>
          <FormItem>
            <Label>相关资料:</Label>
          </FormItem>
        </Form>
    </ScrollView>
    <RootSibling >
    <BottomToolbarWrapper
        title={Todo.title}
        flowType={Todo.workFlowInfo.workFlowId}
        recordId={Todo.workFlowInfo.recordId}
        subflag={Todo.subFlag}
        tableName="KQ_LEAVE_INFO"
        tableId="id"
    >
    <FlowDrawButton name="flowDraw" />
    <ApproveButton name="approve" />
    <FlowSendButton name="send" />
    <FlowLogButton name="flowLog" />
    <FlowNotionButton>
      <FlowNotion
        type="mynotion"
        title="签字意见"
        content="填写签字意见-test"
        show={true}
        requireFn={() => { }}
      />
      <FlowNotion
        type="mynotion2"
        title="建设性意见"
        content="填写建设性意见-test"
        show={true}
        requireFn={() => { }}
      />
      <FlowNotion
        type="hqyjexpnotion"
        title="会签意见说明"
        content="填写会签意见说明-test"
        show={true}
        requireFn={() => { }}
      />
      </FlowNotionButton>
      <MoreButton name="more" />
    </BottomToolbarWrapper>
    <RootSibling />

  );
};

export default reduxForm({
  form: 'LeaveSend',
})(LeaveSend);
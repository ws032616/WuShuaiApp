import React from 'react';
import page from 'react-native-sinoui/page';
import Form, {Input,FormItem, Label,reduxForm} from 'react-native-sinoui/reduxForm';
import { View, Alert,ScrollView, Text } from 'react-native';
import { Separator,Typography } from 'react-native-sinoui';

function LeaveShow(props) {
  const Leave = props.Data;
  return (
    <ScrollView>
        <Form>
          <Separator>请假信息</Separator>
          <FormItem>
            <Label>标题:</Label><Typography type="body2">{Leave.title}</Typography>
          </FormItem>
          <FormItem>
            <Label>拟稿人:</Label><Typography type="body2">{Leave.userName}</Typography>
          </FormItem>
          <FormItem>
            <Label>申请时间:</Label><Typography type="body2">{Leave.startTime} 至 {Leave.endTime}</Typography>
          </FormItem>
          <FormItem>
            <Label>请假日期:</Label><Typography type="body2">{Leave.userName}</Typography>
          </FormItem>
          <FormItem>
            <Label>休假种类:</Label><Typography type="body2">{Leave.xjTypeName}</Typography>
          </FormItem>
          <FormItem>
            <Label>是否倒休:</Label><Typography type="body2">{Leave.dx2}</Typography>
          </FormItem>
          <FormItem>
            <Label>请假时长:</Label><Typography type="body2">{Leave.days}(天)，共{Leave.hours}(小时);
              其中实际请假了{Leave.lastHour}(天)，共{Leave.qjhours}(小时);倒休了{Leave.qjhours}(小时)</Typography>
          </FormItem>
          <FormItem>
            <Label>请假部门:</Label><Typography type="body2">{Leave.deptName}</Typography>
          </FormItem>
          <FormItem>
            <Label>理由说明:</Label><Typography type="body2">{Leave.reason}</Typography>
          </FormItem>
          <FormItem>
            <Label>备注:</Label><Typography type="body2">{Leave.remark}</Typography>
          </FormItem>
          <FormItem>
            <Label>相关资料:</Label>
          </FormItem>
        </Form>
    </ScrollView>
  );
};

export default reduxForm({
  form: 'LeaveShow',
})(LeaveShow);
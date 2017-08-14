import React from 'react';
import page from 'react-native-sinoui/page';
import Form, {Input,FormItem, Label,reduxForm} from 'react-native-sinoui/reduxForm';
import { View, Alert,ScrollView, Text } from 'react-native';
import { Separator,Typography } from 'react-native-sinoui';

function LeaveSend(props) {
  const Data = props.Todo;
  return (
    <ScrollView>
        <Form>
          <Separator>公出信息</Separator>
          <FormItem>
            <Label>公出人:</Label><Typography type="body2">{Data.UserName}</Typography>
          </FormItem>
          <FormItem>
            <Label>申请时间:</Label><Typography type="body2">{Data.creTime}</Typography>
          </FormItem>
          <FormItem>
            <Label>时间范围:</Label><Typography type="body2">{Data.StartDate}{Data.startDateFlag}至{Data.endDate}{Data.endDateFlag}</Typography>
          </FormItem>
          <FormItem>
            <Label>公出地点:</Label><Typography type="body2">{Data.destination}</Typography>
          </FormItem>
          <FormItem>
            <Label>公出事由:</Label><Typography type="body2">{Data.explan}</Typography>
          </FormItem>
          <FormItem>
            <Label>备注:</Label><Typography type="body2">{Data.remark}</Typography>
          </FormItem>
        </Form>
    </ScrollView>
  );
};

export default reduxForm({
  form: 'LeaveSend',
})(LeaveSend);
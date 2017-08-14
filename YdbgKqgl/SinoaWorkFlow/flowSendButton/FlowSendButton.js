import { createActionCreators } from 'sinooa-redux-workflow';
import DefaultWorkflowRequest from './DefaultWorkflowRequest';

type SendWorkflowRequest = {
  filetypeid: string,
  userid: string,
  title: string,
  recordid: string,
  subflag: string,
  flag: string,
  settime: string,
  userflag: string,
  para: string,
  transferflag: string,
  idea: string,
  deptid: string,
  sign: string,
};

export default function FlowSendButton(props) {
  const actionCreators = createActionCreators('workflow_status', 'send');
  const defaultWorkflowRequest = new DefaultWorkflowRequest({
    currentUserId: '110928171642710',
    currentUser: {
      userId: '110928171642710',
      userName: '谭畅',
      loginName: '谭畅',
      deptName: '重庆市气象局',
      noteDeptId: '001001',
      noteDeptName: '办公室',
      noteFullDeptName: '/市局办公室',
    },
  });
  function sendWorkFlow(dispatch, params) {
    // todo 保存
    // todo 设置参数
    // 发送 调用saga
    dispatch(
      actionCreators.sendStart({
        requestParam: params,
        flowType: params.filetypeid,
        recordId: params.recordid,
      }),
    );
  }

  function setNotionParam(requestParam) {
    // todo
    // 如果是必填意见，则跳转到填写意见页面
    requestParam.contents = requestParam.tempNotions.map(
      tempNotion =>
        // if (tempNotion.requireFn()) {
        //   if (tempNotion.content === '' && !tempNotion.tempSign) {
        //     requestParam.onStateChange('needWriteNotion');
        //     throw new Error('1'); // 需要填写意见
        //   }
        // }
        tempNotion.content,
    );
  }

  function updateSign(request) {
    if (request.idea.replace(/\^#\^/g, '') === '') {
      request.sign = 'FALSE';
    }
    return request;
  }

  function generateWorkflowRequest(requestParam) {
    let workflowRequest = defaultWorkflowRequest.generateWorkflowRequest(
      requestParam,
      requestParam.transferflag,
      requestParam.contents,
    );

    workflowRequest = updateSign(workflowRequest);
    // requestParam.onStateChange('generateWorkflowRequest');
    return workflowRequest;
  }

  function send(dispatch, DefaultWorkflowParam) {
    // todo 表单验证
    setNotionParam(DefaultWorkflowParam);
    const workflowRequest = generateWorkflowRequest(DefaultWorkflowParam);
    sendWorkFlow(dispatch, workflowRequest);
  }
  const button = {
    id: 'send',
    title: '发送',
    className: 'send', // iconName
    order: 2,
    onPress: send,
    show: true,
    transferflag: '0',
  };
  return button;
}

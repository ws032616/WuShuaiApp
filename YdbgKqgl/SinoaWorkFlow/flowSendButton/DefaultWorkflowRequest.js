import WorkflowRequest from './WorkflowRequest';

export default class DefaultWorkflowRequest {
  constructor(LinkerService) {
    this.LinkerService = LinkerService;
  }
  createParams = (request, transferflag) => ({
    filetypeid: request.flowType,
    userid: this.LinkerService.currentUserId,
    title: request.title,
    sql: request.sql || '',
    recordid: request.recordId,
    subflag: request.subflag || '1',
    flag: request.flag || 'selectoption',
    settime: request.settime || '',
    userflag: '1',
    para: '0',
    transferflag: transferflag || '0',
    needSign: request.needSign,
  });

  generateWorkflowRequest = (requestParam, transferflag, tempNotions) => {
    const params = this.createParams(requestParam, transferflag);
    const request = new WorkflowRequest(
      params,
      tempNotions,
      transferflag,
      this.LinkerService.currentUser,
    ).params;
    return request;
  };
}

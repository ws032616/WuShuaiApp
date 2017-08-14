export default class WorkflowRequest {
  static TransferFlag = {
    yes: '1',
    no: '0',
  };
  constructor(params, notions, transferflag, cruUser) {
    this.params = params;
    this.setNotions(notions);
    this.setDeptId(cruUser);
    this.setTransferflag(transferflag);
    if (
      this.params.needSign !== false ||
      (this.idea && !/^(\^\#\^)+$/.test(this.idea))
    ) {
      // 已填写临时意见，则生成新的签名
      this.setSign(transferflag, cruUser, notions);
    }
    delete this.params.needSign;
  }

  setNotions = notions => {
    this.params.idea = notions
      .map(message => this.transferStr(message).replace(/'/g, '’'))
      .join('^#^');
  };
  setDeptId = cruUser => {
    this.params.deptid = cruUser.noteDeptId;
  };

  setTransferflag = transferflag => {
    this.params.transferflag = transferflag || WorkflowRequest.TransferFlag.no;
  };
  setSign = (transferflag, cruUser, notions) => {
    if (transferflag === WorkflowRequest.TransferFlag.yes) {
      this.params.sign = this.getSign(cruUser);
      const isNotionEmpty = notions.every(
        notion => !(notion === null || notion === ''),
        // return !_.isEmpty(notion);
      );
      if (isNotionEmpty) {
        this.params.sign = 'FALSE';
      }
    } else {
      this.params.sign = this.getSign(cruUser);
    }
  };
  getSign = cruUser => {
    const date = new Date();
    const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    const deptId = cruUser.noteDeptId;
    const deptName = cruUser.noteDeptName;
    return (
      `[${deptId}*${cruUser.userId}]` +
      `|${deptName}|:|${cruUser.userName}|${time}`
    );
  };
  transferStr = str => {
    const transferWords = /[<>\"\'\%\&\\\^\|\/]/g;
    let result = str || '';
    if (str !== null) {
      result = result.replace(
        transferWords,
        word => `chr(${word.charCodeAt(0)})`,
      );
    }
    return result;
  };
}

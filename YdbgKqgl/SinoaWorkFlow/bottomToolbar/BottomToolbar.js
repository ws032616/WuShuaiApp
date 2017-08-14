import React, { Children, Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-sinoui';
import FlowSendButton from '../flowSendButton';
import TouchableItem from '../TouchableItem';
import SendFlowOperateWrapper from '../flowSendButton/SendFlowOperateWrapper';
import FlowNotionButton from '../flowNotionButton';
import ViewNotionListWrapper from '../flowNotionButton/ViewNotionListWrapper';
import styles from './styles';
import WriteNotionWrapper from '../flowNotionButton/WriteNotionWrapper';
import WriteNotion from '../flowNotionButton/WriteNotion';
import FlowLogButton from '../flowLogButton';
import MoreButton from '../moreButton';
import FlowDrawButton from '../flowDrawButton';
import ApproveButton from '../approveButton';

type ProspType = {
  children: Children<*>,
  workflowRequest: Object,
  dispatch: Funtion,
  title: string, // 对应业务的标题
  recordId: string, // 对应业务的id
  flowType: string, // 对应业务的流程类型
  subflag: string, // 对应业务的流程状态
  tableName: string, // 对应业务的业务表
  tableId: string,
  setTime?: string,
  needSign?: boolean,
  successFn?: Function, // 流程操作成功后去做的事情，暂时不考虑
  auth?: Function, // 权限，暂时不考虑
};
export default class BottomToolbar extends Component {
  constructor(props: ProspType) {
    super(props);
    this.state = {
      buttons: [],
      tempNotions: [],
      DefaultWorkflowParam: {
        flowType: props.flowType,
        recordId: props.recordId,
        title: props.title,
        tempNotions: this.getTempNotions(),
        settime: props.setTime || '',
        tableName: props.tableName,
        tableId: props.tableId,
        needSign: props.needSign,
      },
    };
  }
  /**
   *
   * 更新临时意见
   *
   * @memberof BottomToolbar
   */
  updateTempNotion = tempNotion => {
    const tempNotions = (this.state && this.state.tempNotions) || []; // 这个值不对
    const newTempNotions = tempNotions.map(item => {
      if (item.type === tempNotion.type) {
        return tempNotion;
      }
      return item;
    });
    this.setState({ tempNotions: newTempNotions });
  };

  // 在这里去维护一个临时意见
  getTempNotions() {
    return (this.state && this.state.tempNotions) || [];
  }

  setShowWriteNotion = (flag, type) => {
    this.setState({ showWriteNotion: flag });
    this.setState({ notionType: type });
    let tempNotion = '';
    this.state.tempNotions.forEach(item => {
      if (item.type === type) {
        tempNotion = item.content;
      }
    });
    this.setState({ tempNotion: tempNotion });
  };

  updateShow = show => {
    this.setState({ showWriteNotion: show });
  };

  /**
   * 设置临时意见
   *
   * @param {any} tempNotion
   * @memberof BottomToolbar
   */
  setTempNotions = tempNotion => {
    const tempNotions = this.state.tempNotions;
    if (!this.state.tempNotions.includes(tempNotion)) {
      tempNotions.push(tempNotion);
      this.setState({ tempNotions });
    }
  };

  initFlowNotion = props => {
    const flowNotions = React.Children.toArray(props.children);

    flowNotions.map(flowNotion => {
      const tempNotion = {
        type: flowNotion.props.type,
        title: flowNotion.props.title,
        content: flowNotion.props.content,
        show: flowNotion.props.show,
        requireFn: flowNotion.props && flowNotion.props.requireFn,
      };

      this.setTempNotions(tempNotion);
    });

    // 将每类型的临时意见加入到BottomToolBar中
    function addTempNotion(flowNotion) {}
  };

  componentWillMount() {
    const children = React.Children.toArray(this.props.children);
    let buttons = [];

    children.forEach(child => {
      if (child.type.name === 'FlowSendButton') {
        const buttonConfig = FlowSendButton();
        if (buttonConfig.show) {
          buttons.push(buttonConfig);
        }
      } else if (child.type.name === 'FlowNotionButton') {
        const buttonConfig = FlowNotionButton({
          ...child.props,
          setShowWriteNotion: this.setShowWriteNotion,
          setTempNotions: this.setTempNotions,
        });
        if (buttonConfig.show) {
          buttons.push(buttonConfig);
          this.initFlowNotion(child.props);
        }
      } else if (child.type.name === 'FlowLogButton') {
        const buttonConfig = FlowLogButton();
        if (buttonConfig.show) {
          buttons.push(buttonConfig);
        }
      } else if (child.type.name === 'ApproveButton') {
        const buttonConfig = ApproveButton();
        if (buttonConfig.show) {
          buttons.push(buttonConfig);
        }
      } else if (child.type.name === 'FlowDrawButton') {
        const buttonConfig = FlowDrawButton();
        if (buttonConfig.show) {
          buttons.push(buttonConfig);
        }
      }
    }, this);
    buttons.sort(function(a, b) {
      return a.order - b.order;
    });
    if (buttons.length > 4) {
      const buttonConfig = MoreButton();
      buttons = buttons.slice(0, 3);
      buttons.push(buttonConfig);
    }
    this.setState({ buttons });
  }

  render() {
    return (
      <View style={styles.toolbarContainer}>
        <View style={styles.toolbar}>
          {this.state.buttons.map((item, i) =>
            <TouchableItem
              key={i}
              delayPressIn={0}
              onPress={() =>
                item.onPress(
                  this.props.dispatch,
                  this.state.DefaultWorkflowParam,
                )}
              borderless
              style={styles.container}
            >
              <Icon name={item.className} active style={{ color: '#444' }} />
              <Text style={{ fontSize: 12, color: '#444' }}>
                {item.title}
              </Text>
            </TouchableItem>,
          )}
        </View>
        <SendFlowOperateWrapper
          flowType={this.props.flowType}
          recordId={this.props.recordId}
        />
        <ViewNotionListWrapper
          flowType={this.props.flowType}
          recordId={this.props.recordId}
        />
        <WriteNotionWrapper
          show={this.state.showWriteNotion}
          updateShow={this.updateShow}
          updateTempNotion={this.updateTempNotion}
          dispatch={this.props.dispatch}
          recordId={this.props.recordId}
          flowType={this.props.flowType}
          DefaultWorkflowParam={this.state.DefaultWorkflowParam}
          type={this.state.notionType}
          userId="101008113102837"
          content={this.state.tempNotion}
          updateContent={value => {
            this.setState({ tempNotion: value });
          }}
        />
      </View>
    );
  }
}

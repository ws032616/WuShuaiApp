//@flow
import React from 'react';
import { createActionCreators } from 'sinooa-redux-workflow';
import { ActionSheet } from 'react-native-sinoui';
import { Modal, Progress, Alert, Header, Button } from 'react-native-sinoui';
import { View, Text } from 'react-native';

type PropsType = {
  setShowWriteNotion: Function,
  setTempNotions: Function,
  children: any, // 三个签字意见 flowNotion
};
export default function FlowNotionButton(props: PropsType) {
  const actionCreators = createActionCreators('notions', 'fetch');
  const CANCEL_INDEX = 4;

  function openNotionList(dispatch, params) {
    dispatch(
      actionCreators.fetchStart({
        flowType: params.flowType,
        recordId: params.recordId,
      }),
    );
  }

  function openWriteNotion(buttonIndex, DefaultWorkflowParam) {
    let notionTitles = [];
    getNotionsType(props.children).forEach(item => {
      if (item !== '-') {
        notionTitles.push(item);
      }
    });
    const children = React.Children.toArray(props.children);
    let selectedNotion = {};
    children.forEach(child => {
      if (child.props.title === notionTitles[buttonIndex]) {
        selectedNotion = child.props;
      }
    });
    props.setShowWriteNotion(true, selectedNotion.type, selectedNotion.content);
  }

  function getNotionsType(_children) {
    const children = React.Children.toArray(_children);
    const notionsType = ['查看意见', '-'];
    children.forEach(child => {
      if (child.props.show) {
        notionsType.push(child.props.title);
        notionsType.push('-');
      }
    });
    notionsType.push('取消');
    return notionsType;
  }

  function onPress(dispatch, DefaultWorkflowParam) {
    ActionSheet.show(
      {
        options: getNotionsType(props.children),
        cancelButtonIndex: CANCEL_INDEX,
        title: '请选择操作',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          openNotionList(dispatch, DefaultWorkflowParam);
        }
        openWriteNotion(buttonIndex, DefaultWorkflowParam);
      },
    );
  }

  const button = {
    id: 'notion',
    title: '意见',
    className: 'chatboxes',
    order: 1,
    onPress: onPress,
    show: true,
  };
  return button;
}

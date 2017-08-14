// @flow
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Modal, Progress, Alert, Header, Button } from 'react-native-sinoui';
import NotionList from './NotionList';
import StatusErrorPage from './StatusErrorPage';
import OrderMenuButton from './OrderMenuButton';
import { withTheme } from 'styled-components';

class ViewNotionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
      orderBy: 'node',
    };
  }
  props: {
    workflowResponse: Object,
    fetchStatus: string,
  };

  componentWillUpdate() {
    if (!this.state.modalVisible) {
      this.setState({ modalVisible: true });
    }
  }

  render() {
    if (this.props.fetchStatus === 'DOING') {
      return (
        <Modal isVisible isNativeModal>
          <View
            style={[
              styles.modalPage,
              { backgroundColor: this.props.theme.palette.grey[200] },
            ]}
          >
            <Header headerTitle="意见" headerBackTitle="返回" />
            <View style={styles.loadingPage}>
              <Progress size="large" />
              <Text>加载中...</Text>
            </View>
          </View>
        </Modal>
      );
    } else if (this.props.fetchStatus === 'SUCCESS') {
      if (this.props.workflowResponse) {
        return (
          <Modal isNativeModal isVisible={this.state.modalVisible}>
            <View
              style={[
                styles.modalPage,
                { backgroundColor: this.props.theme.palette.grey[200] },
              ]}
            >
              <Header
                headerTitle="意见"
                headerBackTitle="返回"
                headerRight={
                  <OrderMenuButton
                    onChangeOrderBy={value => this.setState({ orderBy: value })}
                  />
                }
                headerBackButtonOnPress={() =>
                  this.setState({
                    modalVisible: false,
                  })}
              />
              <NotionList
                notionList={this.props.workflowResponse}
                orderBy={this.state.orderBy}
              />
            </View>
          </Modal>
        );
      } else if (!this.props.workflowResponse) {
        return (
          <Modal isNativeModal isVisible={this.state.modalVisible}>
            <View
              style={[
                styles.modalPage,
                { backgroundColor: this.props.theme.palette.grey[200] },
              ]}
            >
              <Header
                headerTitle="意见"
                headerBackTitle="返回"
                headerBackButtonOnPress={() =>
                  this.setState({
                    modalVisible: false,
                  })}
              />
              <StatusErrorPage />
            </View>
          </Modal>
        );
      }
    } else if (this.props.fetchStatus === 'FAILURE') {
      return (
        <Modal isNativeModal isVisible={this.state.modalVisible}>
          <View
            style={[
              styles.modalPage,
              { backgroundColor: this.props.theme.palette.grey[200] },
            ]}
          >
            <Header
              headerTitle="意见"
              headerBackTitle="返回"
              headerBackButtonOnPress={() =>
                this.setState({ modalVisible: false })}
            />
            <StatusErrorPage />
          </View>
        </Modal>
      );
    }
    return null;
  }
}

export default withTheme(ViewNotionList);

const styles = StyleSheet.create({
  modalPage: {
    flex: 1,
  },
  loadingPage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

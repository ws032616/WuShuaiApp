import React, { Component } from 'react';
import { Tabs, Tab, Card, CardContent, View } from 'react-native-sinoui';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchLeaves,showLeave,todofetchLeaves,showTodo } from '../Redux/LeavesRedux';
import LeaveList from '../Containers/LeaveList';
import LeaveTodosList from '../Containers/LeaveTodosList';

class LeaveMainPage extends Component {
    static navigationOptions = {
        title: '请假列表',
    };
    componentDidMount() {
        this.props.dispatch(todofetchLeaves());
        this.props.dispatch(fetchLeaves());
    };

    Touchable1(LeaveName,LeaveId){
      if(LeaveName =="LeaveShowPage"){
        this.props.dispatch(showLeave(LeaveId));
      }else{
        this.props.dispatch(showTodo(LeaveId));
      }
        const { navigate } = this.props.navigation;
        navigate(LeaveName,LeaveId);
    };

    render() {
        const { dispatch } = this.props;
        return (
            <Tabs
            selectedIndex={0}
            tabBarUnderlineStyle={{ backgroundColor: '#387ef5' }}
            tabBarBackgroundColor="#d2d2d2"
            color="primary"
            tabBarActiveTextColor="#387ef5"
            tabBarInactiveTextColor="#000"
            tabBarTextStyle={{ fontSize: 18 }}
            >
            <Tab label="待办">
                <View>
                    <LeaveTodosList onItemPress={(LeaveName,LeaveId) =>this.Touchable1(LeaveName,LeaveId)} />
                </View>
            </Tab>
            <Tab label="已办理">
                <View>
                    <LeaveList onItemPress={(LeaveName,LeaveId) =>this.Touchable1(LeaveName,LeaveId)} />
                </View>
            </Tab>
            </Tabs>
        );
    }
}
export default connect(state => ({}))(LeaveMainPage);

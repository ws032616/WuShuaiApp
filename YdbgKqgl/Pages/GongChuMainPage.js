import React, { Component } from 'react';
import { Tabs, Tab, Card, CardContent, View } from 'react-native-sinoui';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchGongChus,showLeave,fetchTodosGongChu,gongChuShow } from '../Redux/LeavesRedux';
import GongChuList from '../Containers/GongChu/GongChuList';
import GongChuTodoList from '../Containers/GongChu/GongChuTodoList';

class GongChuMainPage extends Component {
    static navigationOptions = {
        title: '公出列表',
    };
    componentDidMount() {
        this.props.dispatch(fetchTodosGongChu());
        this.props.dispatch(fetchGongChus());
    };

    Touchable(LeaveName,LeaveId){
      if(LeaveName =="GongChuShowPage"){
        this.props.dispatch(gongChuShow(LeaveId));
      }else{
        this.props.dispatch(gongChuShow(LeaveId));
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
                    <GongChuTodoList onItemPress={(LeaveName,LeaveId) =>this.Touchable(LeaveName,LeaveId)} />
                </View>
            </Tab>
            <Tab label="已办理">
                <View>
                    <GongChuList onItemPress={(LeaveName,LeaveId) =>this.Touchable(LeaveName,LeaveId)} />
                </View>
            </Tab>
            </Tabs>
        );
    }
}
export default connect(state => ({}))(GongChuMainPage);

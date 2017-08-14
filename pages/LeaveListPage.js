import React from 'react';
import { View } from 'react-native';
import {List,Item,H2,P } from 'react-native-sinoui';


export default function LeaveListPage({
     todos,
    onRequestDeleteTodo,
    onRequestToggleTodoDone,
}){

    const LeaveList = [
  { userName: '曹逸飞', type: '住宅', date: '昨天', state: false },
  { userName: '曹逸男', type: '北京 移动', date: '星期日', state: true },
  { userName: '张海飞', type: '兰州，甘肃', date: '星期日', state: false },
  { userName: '陈长生', type: '北京 移动', date: '星期日', state: true }];

    return(<View>
        <List
            data = {LeaveList}
            renderItem={({item})=>{
                return(<Item>
                    <H2>{item.userName}</H2>
                    <P>{item.type}</P>
                    </Item>);
            }}> 
            refreshing = {true || false}
            onRefresh={() => this._onRefresh()}
            onEndReached ={() => this._onEndReached()}
            getItemLayout = {(data,index) =>({
              length:44,
              offset:44 * index,
              index,
            })}   
        </List>
    </View>)
}

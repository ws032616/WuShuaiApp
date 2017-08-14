import React from 'react';
import { View,TouchableHighlight } from 'react-native';
import {List,Item,H2,P,Note,itemRight,Icon } from 'react-native-sinoui';

var navigation = null;
export default function LeaveTodosList(props){
    return(<View>
        <List
            data = {props.Todos}
            renderItem={({item})=>{
                return(
                    <TouchableHighlight onPress={() => props.onItemPress("LeaveSendPage",item.workFlowinfoId)}>
                        <View>
                            <Item key={item.workFlowinfoId}>
                                <H2>{item.flowTypeName}</H2>
                                <P>{item.title}</P>
                                <Note itemRight>{item.preMailTime}</Note>
                                    <Icon itemRight name="information-circle" />
                            </Item>
                        </View>
                    </TouchableHighlight>
                    );
            }}
            /* 是否在加载 */
            refreshing={ props.refreshing || false}
            /* 下拉刷新 */
            onRefresh={()=>  props.todofetchLeaves(props.refreshing)}
            /* 滑动到底部加载更多 */
            loading={ props.loading || false}
            
            //默认显示多少条数据
            initialListSize={10}
            onEndReached={()=>  props.todoOnEndReach(props.page)} 
            initialNumToRender={10}
            onEndReachedThreshold={0.5}
            getItemLayout ={(data,index)=>({
                length: 22,
                offset: 22 * index,
                index,
            })}
            >    
        </List>
    </View>)
}

import React from 'react';
import { View,TouchableHighlight } from 'react-native';
import {List,Item,H2,P,Note,itemRight,Icon } from 'react-native-sinoui';

export default function LeaveList(props){
    return(<View>
        <List
            data = {props.Datas}
            renderItem={({item})=>{
                return(
                    <TouchableHighlight onPress={() => props.onItemPress("LeaveShowPage",item.id)}>
                        <View>
                            <Item key={item.id}>
                                <H2>{item.userName}</H2>
                                <P>{item.xjTypeName}:{item.title}</P>
                                <Note itemRight>{item.creTime}</Note>
                                    <Icon itemRight name="information-circle" />
                            </Item>
                        </View>
                    </TouchableHighlight>
                    );
            }}
            /* 是否在加载 */
            refreshing={ props.refreshing || false}
            /* 下拉刷新 */
            onRefresh={()=>  props._onRefresh(props.refreshing)}
            /* 滑动到底部加载更多 */
            loading={ props.loading || false}
            
            //默认显示多少条数据
            initialListSize={10}
            onEndReached={()=>  props._onEndreached(props.page)} 
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

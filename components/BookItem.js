import React from 'react';
import { View, Text,Button,StyleSheet,TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin:16,
    },
    button:{
        margin:10,
    },
    read:{
        color:'red',
    },
    touchables: {
        margin: 10,
        backgroundColor: 'blue',
        width: 200,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
    },
});
export default function bookItem(props){
    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.touchables} onPress={props.TouchableButton}>
                <Text style={props.read && styles.read}>标题：{props.title}</Text>
            </TouchableHighlight>
            <Button title="删除" style={styles.button} onPress={props.onDeletButton} />
            <Button title={props.read? '已阅读' : '未阅读'} 
            style={styles.button} onPress={props.onReadButton} />
        </View>
    );

}

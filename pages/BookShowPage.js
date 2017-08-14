import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Title:{
        color:'red',
        fontSize:30,
    },
    Text:{
        color:'blue',
        fontSize:20,
        paddingLeft:50,
    }
});
export default function BookShowPage(props){
    return (<View style={styles.container}>
                <Text style={styles.Title}>标题:{props.navigation.state.params.title}</Text>
                <Text style={styles.Text}>作者:大大大坏蛋{props.navigation.state.params.id}</Text>
                <Text style={styles.Text}>内容:好好学习,天天向上</Text>
            </View>);
}
BookShowPage.navigationOptions={title:'书籍内容'};
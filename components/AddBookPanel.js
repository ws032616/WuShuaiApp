import React from 'react';
import {View,TextInput,Button,StyleSheet }from 'react-native'; 

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:16,
    },
    textInput:{
        flex:1,
    },
});

export default function AddBookPanel(props){
    return(<View style={styles.container}>
    <TextInput style={styles.textInput}
        value={props.title}
        onChangeText={props.onTitleChange}/>
    <Button title="添加" onPress={props.onclick}/>
    </View>);
}


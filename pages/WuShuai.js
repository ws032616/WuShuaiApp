import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    viewContent:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    text:{
        color:'red',
        fontSize:40,
    },

});

export default function WuShuai(){
   return (
        <View style={styles.viewContent}>
            <Text style={styles.text}>武</Text>
            <Text style={styles.text}>帅</Text>
        </View>
        );
}
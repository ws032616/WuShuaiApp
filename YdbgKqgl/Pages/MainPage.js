import React from 'react';
import { View,Button,StyleSheet } from 'react-native';

const pages=[{
    title:'请假管理',
    page:'LeaveMainPage',
    },{
    title:'公出管理',
    page:'GongChuMainPage',
    }
];
const styles = StyleSheet.create({
    button:{
        margin:8,
    }
})

export default function MainPage(props) {
    const { navigate } = props.navigation;
    const buttons = pages.map( page =>
        <Button
            key = {page.title}
            title={page.title}
            style={styles.button}
            onPress={() => navigate(page.page)}
        />);
    return <View>{buttons}</View>;
}

MainPage.navigationOptions = {
    title:'考勤管理App'
};
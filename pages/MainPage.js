import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const pages = [{
    title: '武帅',
    page: 'WuShuai',
 }, {
     title: '书籍',
     page: 'Book',
 }, {
    title: '时钟',
    page: 'Clock',
  }, {
    title: '待办事项',
    page: 'Todos',
  }, {
    title: '请假列表',
    page: 'LeaveListPage',
  }];

const styles = StyleSheet.create({
    button: {
        margin: 8,
    }
})

export default function MainPage(props) {
    const { navigate } = props.navigation;
    const buttons = pages.map( page =>
        <Button
            title={page.title}
            style={styles.button}
            onPress={() => navigate(page.page)}
        />);
    return <View>{buttons}</View>;
}

MainPage.navigationOptions = {
    title: '武帅的App'
};

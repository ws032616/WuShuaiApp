import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 8,
    },
    button: {
        margin: 8,
    },
    done: {
        color: 'red',
    },
});

export default function TodoItem(props) {
    return (<View style={styles.container}>
        <Text style={props.done && styles.done}>标题：{props.title}</Text>
        <Button
            title="删除"
            onPress={props.onDeleteButtonClick}
            style={styles.button}
        />
        <Button
            title={props.done ? '撤回' : '已完成'}
            style={styles.button}
            onPress={props.onDoneButtonClick}
        />
    </View>);
}

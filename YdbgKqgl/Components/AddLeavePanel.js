import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddLeavePanel({
    title,
    onTtileChange,
    onRequestAddLeave,
}) {
    return (<View style={styles.container}>
        <TextInput value={title} 
        onChangeText={onTtileChange} 
        style={styles.textInput} />
        <Button
            title="添加"
            onPress={() => onRequestAddLeave(title)}
            disabled={!title} />
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        margin: 8,
        marginRight: 16,
        borderStyle: 'dashed',
        fontSize: 30,
        height: 30,
    }
});

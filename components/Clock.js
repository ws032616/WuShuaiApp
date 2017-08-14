import React from 'react';
import { Text } from 'react-native';

export default function Clock(props) {
    const date = props.time;
    const hour = date.getHours();
    const min = date.getMinutes();
    const second = date.getSeconds();
    return <Text>{hour}:{min}:{second}</Text>;
}

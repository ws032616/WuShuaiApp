import React from 'react';
import { Button } from 'react-native';

export default function ToggleLeaveVisibleFilterPanel({
    filter,
    onFilterChange,
}) {
    return <Button
        title={filter === 'all' ? '只显示未完成的' : '显示所有的'}
        onPress={() => onFilterChange(filter === 'all' ? 'undo' : 'all')}
    />;
}

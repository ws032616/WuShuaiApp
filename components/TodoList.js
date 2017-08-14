import React from 'react';
import { View } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({
    todos,
    onClickItemDoneButton,
    onClickItemDeleteButton,
}) {
    const items = todos.map(todo =>
        <TodoItem
            key={todo.id}
            title={todo.title}
            done={todo.done}
            onDoneButtonClick={() =>
                onClickItemDoneButton(todo)
            }
            onDeleteButtonClick={() => 
                onClickItemDeleteButton(todo)
            } />
    );
    return <View>{items}</View>;
}
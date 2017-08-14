import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import TodoList from '../components/TodoList';
import AddTodoPanel from '../components/AddTodoPanel';

const TODOS = [];
let seed = 0;

for (let i = 0; i < 100; i++) {
    TODOS.push({
        title: `事项${i + 1}`,
        id: seed++,
    });
}

export default class TodosPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TODOS,
            title: '',
        };
    }

    onAddTodoPanelClick() {
        if (!this.state.title) {
            return;
        }
        const todo = {
            id: seed++,
            title: this.state.title,
        };

        const todos = [todo, ...this.state.todos];

        this.setState({
            todos,
            title: '',
        });
    }

    onTitleChange(value) {
        this.setState({
            title: value,
        });
    }

    onClickItemDeleteButton(todo) {
        const idx = this.state.todos.indexOf(todo);

        const todos = [
            ...this.state.todos.slice(0, idx),
            ...this.state.todos.slice(idx + 1)
        ];

        this.setState({
            todos,
        });
    }

    onClickItemDoneButton(todo) {
        const idx = this.state.todos.indexOf(todo);
        const newTodo = {...todo, done: !todo.done};
        const todos = [ ...this.state.todos.slice(0, idx),
            newTodo,
            ...this.state.todos.slice(idx + 1)];
        
        this.setState({
            todos,
        });
    }

    render() {
        return <ScrollView>
            <AddTodoPanel
                title={this.state.title}
                onClick={(title) => 
                    this.onAddTodoPanelClick(title)
                }
                onTitleChange={(value) =>
                    this.onTitleChange(value)
                }
            />
            <TodoList
                todos={this.state.todos}
                onClickItemDoneButton={
                    (todo) => this.onClickItemDoneButton(todo)
                }
                onClickItemDeleteButton={
                    (todo) =>
                        this.onClickItemDeleteButton(todo)
                }
            />
        </ScrollView>;
    }
}

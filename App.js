import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainPage from './pages/MainPage';
import ClockPage from './pages/ClockPage';
import BookPage from './pages/BookPage';
import TodosPage from './pages/TodosPage';
import WuShuai from './pages/WuShuai';
import BookShowPage from'./pages/BookShowPage';
import LeaveListPage from './pages/LeaveListPage';
import './apitest';

const App = StackNavigator({
    Home: {
        screen: MainPage,
    },
    Clock: {
        screen: ClockPage,
    },
    Book: {
        screen: BookPage,
    },
    Todos: {
        screen: TodosPage,
    },
    WuShuai: {
        screen: WuShuai,
    },
    BookShowPage: {
        screen:BookShowPage,
    },
    LeaveListPage:{
        screen:LeaveListPage,
    },
});

function clockReducer(state = {
    time: new Date(),
}, action) {
    if (action.type === 'DIDA') {
        return {
            ...state,
            time: action.payload,
        };
    }
    return state;
}

const store = createStore(clockReducer);

export default function(){
    return(
        <Provider store={createStore()}>
            <App/>
        </Provider>
    );
}
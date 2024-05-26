import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { TodoList } from './features/todo/TodoList';
import { AddTodo } from './features/todo/AddTodo';
import './styles/style.sass';


ReactDOM.render(
    <Provider store={store}>
        <AddTodo />
        <TodoList />
    </Provider>,
    document.getElementById('root')
);
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
};
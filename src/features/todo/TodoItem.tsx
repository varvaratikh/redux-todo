import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from './todoSlice';
import { AppDispatch } from '../../app/store';
import classNames from 'classnames';
import '../../styles/style.sass';

interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
    const dispatch: AppDispatch = useDispatch();

    return (
        <li
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
            onClick={() => dispatch(toggleTodo(id))}
        >
            {text}
        </li>
    );
};
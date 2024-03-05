// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
    return (
        <li>
            <div className="todo-item">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.task}
                </span>
                <button className="remove-btn" onClick={() => removeTodo(todo.id)}>Remove</button>
            </div>
        </li>
    );
};

export default TodoItem;
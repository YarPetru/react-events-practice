import React from 'react';
import s from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="list">
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={s.todo}>
        <input
          className={s.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className={s.description}>{text}</p>
        <button
          type="button"
          className={s.deleteButton}
          onClick={() => onDeleteTodo(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;

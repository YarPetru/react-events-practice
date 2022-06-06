import React from 'react';
import s from './ToDoList.module.css';

const ToDo = ({ todos, onDeleteTodo }) => (
  <ul className="list">
    {todos.map(({ id, text, complited }) => (
      <li key={id} className={s.todo}>
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

export default ToDo;

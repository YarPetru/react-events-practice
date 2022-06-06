import React, { Component } from 'react';
// import Counter from './Counter';
import ToDo from './ToDoList';
import initialTodos from './ToDoList/initialTodos.json';

import s from './App.module.css';

export class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <div className={s.container}>
          {/* <Counter initialValue={100} /> */}
          <ToDo todos={todos} onDeleteTodo={this.deleteTodo} />
          <div className="container">
            <p className="status-paragrph">Общее количество: {todos.length}</p>
            <p className="status-paragrph">
              Количество выполненных: {completedTodos}
            </p>
          </div>
        </div>
      </>
    );
  }
}

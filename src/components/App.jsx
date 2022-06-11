import React, { Component } from 'react';
// import Counter from './Counter';
import TodoList from './TodoList';
import initialTodos from './TodoList/initialTodos.json';

import TodoEditor from './TodoEditor';

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

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));

    // ДОДАТИ ЗМІНУ/ДОДАВАННЯ КЛАССУ ПО ЗМІНІ СТАТУСА КОМПЛІТЕД
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

          <TodoEditor />
          <TodoList
            todos={todos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
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

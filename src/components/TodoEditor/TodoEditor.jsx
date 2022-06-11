import { Component } from 'react';
import s from './TodoEditor.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  onChangeHandler = e => {
    this.setState({ message: e.currentTarget.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    console.log(this.state.message);
  };

  render() {
    return (
      <form className={s.todoEditor} onSubmit={this.onSubmitHandler}>
        <textarea
          className={s.textArea}
          value={this.state.message}
          onChange={this.onChangeHandler}
        ></textarea>
        <button type="submit" className={s.addTodoBtn}>
          Создать
        </button>
      </form>
    );
  }
}

export default TodoEditor;

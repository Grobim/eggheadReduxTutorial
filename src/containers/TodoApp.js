import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions as todoActions } from '../redux/modules/todos';

const mapStateToProps = ({ todos }) => ({
  todos
});
export class TodoApp extends React.Component {
  static propTypes = {
    todos      : PropTypes.array.isRequired,
    addTodo    : PropTypes.func.isRequired,
    toggleTodo : PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this._todoIncrement = 0;
  }

  get todoIncrement () {
    return this._todoIncrement++;
  };

  render () {
    const {
      addTodo,
      todos
    } = this.props;
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }} />
        <button onClick={() => {
          addTodo(
            this.todoIncrement,
            this.input.value
          );
          this.input.value = '';
        }}>
          Add Todo
        </button>
        <ul>
          {todos.map(todo =>
            <li
              key={todo.id}
            >
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, todoActions)(TodoApp);

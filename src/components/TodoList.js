import PropTypes from 'prop-types';
import React from 'react';
import TodoItemContainer from '../containers/TodoItem';

const TodoList = ({ filteredTodos }) => (
  <ul className="todo-list">
    {filteredTodos.map(todo =>
      <TodoItemContainer key={todo.id} todo={todo} />
    )}
  </ul>
)

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default TodoList

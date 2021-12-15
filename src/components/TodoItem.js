import classnames from 'classnames';
import React, {useState} from 'react';
import TodoTextInput from './TodoTextInput';

const TodoItem = ({todo, editTodo, deleteTodo, completeTodo}) => {
  const [state, setState] = useState({editing: false});

  const handleDoubleClick = () => {
    setState({ editing: true })
  }

  const handleSave = (id, text) => {
    if (text.length === 0) {
      deleteTodo()
    } else {
      editTodo(text)
    }
    setState({ editing: false })
  }

  let element
  if (state.editing) {
    element = (
      <TodoTextInput text={todo.text}
                     editing={state.editing}
                     onSave={(text) => handleSave(todo.id, text)} />
    )
  } else {
    element = (
      <div className="view">
        <input className="toggle"
               type="checkbox"
               checked={todo.completed}
               onChange={() => completeTodo()} />
        <label onDoubleClick={handleDoubleClick}>
          {todo.text}
        </label>
        <button className="destroy"
                onClick={() => deleteTodo()} />
      </div>
    )
  }

  return (
    <li className={classnames({
      completed: todo.completed,
      editing: state.editing
    })}>
      {element}
    </li>
  )
}

export default TodoItem;

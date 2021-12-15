import TodoItem from '../components/TodoItem';
import useCompleteTodo from '../hooks/useCompleteTodo';
import useDeleteTodo from '../hooks/useDeleteTodo';
import useEditTodo from '../hooks/useEditTodo';

const TodoItemContainer = ({todo}) => {
  const editTodo = useEditTodo(todo.id);
  const deleteTodo = useDeleteTodo(todo.id);
  const completeTodo = useCompleteTodo(todo.id);

  return <TodoItem todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
}

export default TodoItemContainer;

import {useSetRecoilState} from 'recoil';
import todos from '../reducers/todos';

const useActions = () => {
  const setTodos = useSetRecoilState(todos);
  const addTodo = (text) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: prevTodos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text
      }
    ])
  };

  const editTodo = (id, text) => {
    setTodos(prevTodos => prevTodos.map((todo) =>
      todo.id === id ? { ...todo, text } : todo
    ))
  }

  const completeTodo = id => {
    setTodos(prevTodos => prevTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  const completeAllTodos = () => {
    setTodos(prevTodos => {
      const areAllMarked = prevTodos.every((todo) => todo.completed);
      return prevTodos.map((todo) => ({
        ...todo,
        completed: !areAllMarked
      }));
    });
  }

  const deleteTodo = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => (todo.id !== id));
    });
  }

  const clearCompleted = () => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => (todo.completed === false));
    })
  }

  return {
    addTodo,
    editTodo,
    completeTodo,
    completeAllTodos,
    deleteTodo,
    clearCompleted
  }
}

export default useActions;

import {useAtom} from 'jotai';
import todos from '../reducers/todos';

const useClearCompleted = () => {
  const [prevTodos, setTodos] = useAtom(todos);

  return () => {
    setTodos(prevTodos.filter(todo => (todo.completed === false)));
  }
};

export default useClearCompleted;

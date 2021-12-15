import {useAtom} from 'jotai';
import {useUpdateAtom} from 'jotai/utils';
import todos from '../reducers/todos';

const useCompleteAllTodos = () => {
  const [prevTodos, setTodos] = useAtom(todos);

  return () => {
    const areAllMarked = prevTodos.every((todo) => todo.completed);
    setTodos(prevTodos.map((todo) => ({
      ...todo,
      completed: !areAllMarked
    })));
  }
}

export default useCompleteAllTodos;

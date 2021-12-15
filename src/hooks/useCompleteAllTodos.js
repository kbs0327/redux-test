import {useSetRecoilState} from 'recoil';
import todos from '../reducers/todos';

const useCompleteAllTodos = () => {
  const setTodos = useSetRecoilState(todos);

  return () => {
    setTodos(prevTodos => {
      const areAllMarked = prevTodos.every((todo) => todo.completed);
      return prevTodos.map((todo) => ({
        ...todo,
        completed: !areAllMarked
      }));
    });
  }
}

export default useCompleteAllTodos;

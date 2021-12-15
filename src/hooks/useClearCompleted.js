import {useSetRecoilState} from 'recoil';
import todos from '../reducers/todos';

const useClearCompleted = () => {
  const setTodos = useSetRecoilState(todos);

  return () => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => (todo.completed === false));
    });
  }
};

export default useClearCompleted;

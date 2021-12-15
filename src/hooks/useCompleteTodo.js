import {useSetRecoilState} from 'recoil';
import {todoDataStore} from '../reducers/todos';

const useCompleteTodo = id => {
  const setTodo = useSetRecoilState(todoDataStore(id));
  return () => {
    setTodo(prev => ({
      ...prev,
      completed: !prev.completed
    }));
  }
}

export default useCompleteTodo;

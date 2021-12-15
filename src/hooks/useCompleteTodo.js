import {useAtom} from 'jotai';
import {todoDataStore} from '../reducers/todos';

const useCompleteTodo = id => {
  const [prev, setTodo] = useAtom(todoDataStore(id));
  return () => {
    setTodo(({
      ...prev,
      completed: !prev.completed
    }));
  }
}

export default useCompleteTodo;

import {useAtom} from 'jotai';
import {todoDataStore} from '../reducers/todos';

const useEditTodo = id => {
  const [prev, setTodo] = useAtom(todoDataStore(id));
  return (text) => {
    setTodo(({
      ...prev,
      text
    }))
  }
}

export default useEditTodo;

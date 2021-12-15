import {useAtom} from 'jotai';
import {useAtomValue, useUpdateAtom} from 'jotai/utils';
import todos, {todoIds} from '../reducers/todos';

const useAddTodo = () => {
  const [prevTodos, setTodos] = useAtom(todos);
  const ids = useAtomValue(todoIds);

  return  (text) => {
    const newId = ids.reduce((maxId, id) => Math.max(id, maxId), -1) + 1;
    setTodos([
      ...prevTodos,
      {
        id: newId,
        completed: false,
        text
      }
    ])
  }
}
export default useAddTodo

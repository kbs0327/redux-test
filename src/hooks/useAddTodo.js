import {useRecoilValue, useSetRecoilState} from 'recoil';
import todos, {todoIds} from '../reducers/todos';

const useAddTodo = () => {
  const setTodos = useSetRecoilState(todos);
  const ids = useRecoilValue(todoIds);

  return  (text) => {
    const newId = ids.reduce((maxId, id) => Math.max(id, maxId), -1) + 1;
    setTodos(prevTodos => [
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

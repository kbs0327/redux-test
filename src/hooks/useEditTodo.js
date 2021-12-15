import {useSetRecoilState} from 'recoil';
import {todoDataStore} from '../reducers/todos';

const useEditTodo = id => {
  const setTodo = useSetRecoilState(todoDataStore(id));
  return (text) => {
    setTodo(prev => ({
      ...prev,
      text
    }))
  }
}

export default useEditTodo;

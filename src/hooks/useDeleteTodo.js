import {useResetRecoilState, useSetRecoilState} from 'recoil';
import {todoDataStore, todoIds} from '../reducers/todos';

const useDeleteTodo = id => {
  const setIds = useSetRecoilState(todoIds);
  const resetId = useResetRecoilState(todoDataStore(id));

  return () => {
    resetId();
    setIds(ids => {
      return ids.filter(_id => (_id !== id));
    });
  }
};

export default useDeleteTodo;

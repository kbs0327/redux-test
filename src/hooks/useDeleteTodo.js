import {useAtom} from 'jotai';
import {useUpdateAtom} from 'jotai/utils';
import {todoIds} from '../reducers/todos';

const useDeleteTodo = id => {
  const [ids, setIds] = useAtom(todoIds);

  return () => {
    setIds(ids.filter(_id => (_id !== id)));
  }
};

export default useDeleteTodo;

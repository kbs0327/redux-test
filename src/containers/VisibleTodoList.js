import {useRecoilValue} from 'recoil';
import TodoList from '../components/TodoList';
import useActions from '../hooks/useActions';
import {visibleTodos} from '../selectors';

const VisibleTodoList = () => {
  const actions = useActions();
  const filteredTodos = useRecoilValue(visibleTodos);

  return <TodoList actions={actions} filteredTodos={filteredTodos}/>
};
export default VisibleTodoList

import {useRecoilValue} from 'recoil';
import TodoList from '../components/TodoList';
import {visibleTodos} from '../selectors';

const VisibleTodoList = () => {
  const filteredTodos = useRecoilValue(visibleTodos);

  return <TodoList filteredTodos={filteredTodos}/>
};
export default VisibleTodoList

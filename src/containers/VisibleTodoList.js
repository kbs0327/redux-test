import {useAtomValue} from 'jotai/utils';
import TodoList from '../components/TodoList';
import {visibleTodos} from '../selectors';

const VisibleTodoList = () => {
  const filteredTodos = useAtomValue(visibleTodos);

  return <TodoList filteredTodos={filteredTodos}/>
};
export default VisibleTodoList

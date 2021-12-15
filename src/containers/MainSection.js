import {useAtomValue} from 'jotai/utils';
import MainSection from '../components/MainSection';
import useClearCompleted from '../hooks/useClearCompleted';
import useCompleteAllTodos from '../hooks/useCompleteAllTodos';
import todos from '../reducers/todos';
import {completedTodoCount} from '../selectors';

const MainSectionContainer = () => {
  const todosValue = useAtomValue(todos);
  const completedCount = useAtomValue(completedTodoCount);
  const completeAllTodos = useCompleteAllTodos();
  const clearCompleted = useClearCompleted();
  const actions = {
    completeAllTodos,
    clearCompleted
  };

  return <MainSection completedCount={completedCount} todosCount={todosValue.length} actions={actions}/>
}

export default MainSectionContainer;

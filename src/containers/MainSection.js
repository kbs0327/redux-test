import {useRecoilValue} from 'recoil';
import MainSection from '../components/MainSection';
import useActions from '../hooks/useActions';
import todos from '../reducers/todos';
import {completedTodoCount} from '../selectors';

const MainSectionContainer = () => {
  const todosValue = useRecoilValue(todos);
  const completedCount = useRecoilValue(completedTodoCount);
  const actions = useActions();

  return <MainSection completedCount={completedCount} todosCount={todosValue.length} actions={actions}/>
}

export default MainSectionContainer;

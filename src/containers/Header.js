import Header from '../components/Header';
import useActions from '../hooks/useActions';

const HeaderContainer = () => {
  const {addTodo} = useActions();
  return <Header addTodo={addTodo}/>
}
export default HeaderContainer;

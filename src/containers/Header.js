import Header from '../components/Header';
import useAddTodo from '../hooks/useAddTodo';

const HeaderContainer = () => {
  const addTodo = useAddTodo();
  return <Header addTodo={addTodo}/>
}
export default HeaderContainer;

import {useRecoilState} from 'recoil';
import Link from '../components/Link';
import visibilityFilter from '../reducers/visibilityFilter';

const FooterLink = ({filter, children}) => {
  const [visibilityFilterValue, setVisibilityFilter] = useRecoilState(visibilityFilter);

  const active = filter === visibilityFilterValue;
  const setFilter = () => {
    setVisibilityFilter(filter);
  }

  return <Link setFilter={setFilter} active={active}>{children}</Link>
}

export default FooterLink;

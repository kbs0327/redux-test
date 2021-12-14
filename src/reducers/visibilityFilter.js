import {atom} from 'recoil';
import {SHOW_ALL} from '../constants/TodoFilters';

const visibilityFilter = atom({
  key: 'visibilityFilter',
  default: SHOW_ALL
});

export default visibilityFilter

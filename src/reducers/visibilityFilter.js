import {atom} from 'jotai';
import {SHOW_ALL} from '../constants/TodoFilters';

const visibilityFilter = atom(SHOW_ALL);

export default visibilityFilter

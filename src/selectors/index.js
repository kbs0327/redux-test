import {selector} from 'recoil';
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from '../constants/TodoFilters';
import todos from '../reducers/todos';
import visibilityFilter from '../reducers/visibilityFilter';

export const visibleTodos = selector({
  key: 'visibleTodos',
  get: ({get}) => {
    switch (get(visibilityFilter)){
      case SHOW_ALL:
        return get(todos);
      case SHOW_COMPLETED:
        return get(todos).filter(t => t.completed)
      case SHOW_ACTIVE:
        return get(todos).filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + visibilityFilter)
    }
  }
})

export const completedTodoCount = selector({
  key: 'completedTodoCount',
  get: ({get}) => {
    return get(todos).reduce((count, todo) =>
        todo.completed ? count + 1 : count,
      0
    )
  }
});

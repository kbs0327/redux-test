import {difference} from 'lodash';
import {atom, atomFamily, DefaultValue, selector} from 'recoil';

export const todoDataStore = atomFamily({
  key: 'todo',
  default: null
});

export const todoIds = atom({
  key: 'todoIds',
  default: []
});

const todos = selector({
  key: 'todos',
  get: ({get}) => {
    return get(todoIds).map(id => todoDataStore(id)).map(get);
  },
  set: ({get, set, reset}, newValue) => {
    if (newValue instanceof DefaultValue) {
      get(todoIds).map(id => todoDataStore(id)).forEach(reset);
      reset(todoIds);
      return;
    }
    const ids = newValue.map(value => {
      set(todoDataStore(value.id), value);
      return value.id;
    });
    const removedIds = difference(get(todoIds), ids)
    removedIds.forEach(id => {
      reset(todoDataStore(id));
    });
    set(todoIds, ids);
  }
});

export default todos;

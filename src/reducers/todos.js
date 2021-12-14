import {atom} from 'jotai';
import {atomFamily} from 'jotai/utils';

export const todoDataStore = atomFamily(value => atom(value));

export const todoIds = atom([]);

const todos = atom(
  get => get(todoIds).map(id => todoDataStore(id)).map(get),
  (get, set, newValue) => {
    const ids = newValue.map(value => {
      set(todoDataStore(value.id), value);
      return value.id;
    });
    set(todoIds, ids);
  }
);

export default todos;

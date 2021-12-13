import * as types from '../constants/ActionTypes'

export * from '../reducers/todos';
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})

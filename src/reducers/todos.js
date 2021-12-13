import {combineActions, createActions, handleActions} from 'redux-actions';

const initialState = [
  {
    text: "Use Redux",
    completed: false,
    id: 0
  }
];

export const {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAllTodos,
  clearCompleted
} = createActions(
  {
    ADD_TODO: (text) => ({text}),
    DELETE_TODO: id => todo => (todo.id !== id),
    EDIT_TODO: (id, text) => ({id, text}),
    COMPLETE_TODO: (id) => ({id}),
    CLEAR_COMPLETED: () => todo => (todo.completed === false)
  },
  "COMPLETE_ALL_TODOS",
);

export default handleActions(
  {
    [addTodo]: (state, action) => {
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.payload.text
        }
      ];
    },
    [editTodo]: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    },
    [completeTodo]: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    },
    [completeAllTodos]: (state, action) => {
      const areAllMarked = state.every((todo) => todo.completed);
      return state.map((todo) => ({
        ...todo,
        completed: !areAllMarked
      }));
    },
    [combineActions(deleteTodo, clearCompleted)]: (state, action) => {
      return state.filter(action.payload);
    }
  },
  initialState
);

import { createAction, handleActions } from 'redux-actions';

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// ------------------------------------
// Actions
// ------------------------------------
export const addTodo = createAction(
  ADD_TODO,
  (id, text) => {
    return {
      id,
      text
    };
  }
);
export const toggleTodo = createAction(
  TOGGLE_TODO,
  (id) => {
    return { id };
  }
);

export const actions = {
  addTodo,
  toggleTodo
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [ADD_TODO] : (state, { payload }) => {
    return [...state, {
      id        : payload.id,
      text      : payload.text,
      completed : false
    }];
  },
  [TOGGLE_TODO] : (state, { payload }) => {
    return state.map(todo => {
      if (todo.id !== payload.id) {
        return todo;
      }
      return {
        ...todo,
        completed : !todo.completed
      };
    });
  }
}, []);

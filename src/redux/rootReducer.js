import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import counter from './modules/counter';
import todos from './modules/todos';

export default combineReducers({
  counter,
  router,
  todos
});

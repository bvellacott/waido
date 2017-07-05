import { combineReducers } from 'redux-immutable';

// reducers
// import routing from './immutableRouting';
// import visibilityFilter from './visibilityFilter';
// import todos from './todos';
import { visibilityFilter, todos, routing } from 'waido-state';

const reducers = combineReducers({
  browser: combineReducers({ 
    visibilityFilter,
    routing
  }),
  shared: combineReducers({ 
    todos 
  })
});

export default reducers;
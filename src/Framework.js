import { createStore } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { combineReducers } from 'redux-immutable';

// reducers
import routing from './reducers/immutableRouting';
import visibilityFilter from './reducers/visibilityFilter';
import todo from './reducers/todos';


export const rootReducer = combineReducers({
	visibilityFilter,
  todo,
  routing
});

export const store = createStore(rootReducer);

// Create an enhanced history that syncs navigation events with the store
export const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
  		// convert from an immutable to a standard js object
      return state.get('routing').toJS();
  }
});

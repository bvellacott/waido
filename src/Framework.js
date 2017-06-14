import { createStore } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';

// reducers
import routing from './reducers/immutableRouting';
import visibilityFilter from './reducers/visibilityFilter';
import todos from './reducers/todos';

const initialState = Map();

export const rootReducer = combineReducers({
	visibilityFilter,
  todos,
  routing
});

export const store = createStore(rootReducer, initialState);

// Create an enhanced history that syncs navigation events with the store
export const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
		// convert from an immutable to a standard js object
    return state.get('routing').toJS();
  }
});

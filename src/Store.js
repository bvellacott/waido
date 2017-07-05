import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import { fromJS, Map } from 'immutable';

// middleware
import logger from './middleware/logger';
import localstorage from './middleware/localstorage';
import SocketStorage from './middleware/socket';

//sagas
import rootSaga from './sagas';

import { saveState, recoverStateSync } from './schema/db';

// import { reducers } from 'waido-state';
import reducers from './reducers';

let socketClient = require('socket.io-client')('http://localhost:3333');

const initialState = recoverStateSync();

export const rootReducer = (state, action) => {
  if(action.type === 'RECOVER_STATE')
    return state.set('shared', action.state);
  else
    return reducers(state, action);
}

var middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
middlewares.push(localstorage);
middlewares.push(new SocketStorage(socketClient));

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const middleware = applyMiddleware(...middlewares);

const store = createStore(
	rootReducer, 
	initialState, 
	middleware);

sagaMiddleware.run(rootSaga);

socketClient
.on('action', action => { 
  console.log('from server: ', action); 
  store.dispatch(action);
})
.on('stateResponse', action => {
  console.log('from server: ', action);
  action.state = fromJS(JSON.parse(action.state));
  store.dispatch(action);
});

// Create an enhanced history that syncs navigation events with the store
export const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) {
		// convert from an immutable to a standard js object
    return state.get('browser').get('routing').toJS();
  }
});

export default store;

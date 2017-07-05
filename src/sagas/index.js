import { call, put, all, takeEvery, takeLatest, select } from 'redux-saga/effects'

let socketClient = require('socket.io-client')('http://localhost:3333');

// socketClient
// .on('action', action => { 
//   console.log('from server: ', action); 
//   store.dispatch(action);
// })
// .on('stateResponse', action => {
//   console.log('from server: ', action);
//   action.state = fromJS(JSON.parse(action.state));
//   store.dispatch(action);
// });


export function* routeAction(action) {
  if(action.source === 'SERVER') {
    // avoid an infinite loop in case state recovery continuosly fails
    if(action.type === 'RECOVER_STATE')
      return;

    // check that the hash code is the same on the local state as it is on the server
    // this way we have confidence that the state is the same without having to send 
    // the entire state every time
    if(action.hash && select().get('shared').hashCode() !== action.hash) {
      console.error('The application state is invalid\n\nRecovering state from the server');
      socketClient.emit('stateRequest');
    }
  }
  socketClient.emit('action', action);
  return 'action sent to server';
}

export function* socket() {
  takeEvery('*', routeAction);
}

export default function* root() {
  yield all([
    takeEvery('*', action => console.log(action.type)),
    socket()
  ]);
}
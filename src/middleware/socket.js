export default function(socketClient) {
  return store => next => action => {
    if(action.source === 'SERVER') {
      let result = next(action);

      // avoid an infinite loop in case state recovery continuosly fails
      if(action.type === 'RECOVER_STATE')
        return result;

      // check that the hash code is the same on the local state as it is on the server
      // this way we have confidence that the state is the same without having to send 
      // the entire state every time
      if(action.hash && store.getState().get('shared').hashCode() !== action.hash) {
        console.error('The application state is invalid\n\nRecovering state from the server');
        socketClient.emit('stateRequest');
      }
      
      return result;
    }
    socketClient.emit('action', action);
    return 'action sent to server';
  };
}
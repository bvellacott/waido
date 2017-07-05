import { Map, List } from 'immutable';
import { create as Todo } from '../schema/todo' 

export default function todoApp(state = Map(), action) {
  var todo;
  switch (action.source) {
    case 'SERVER':
      state = state.map(todo => todo.set('selected', false))
      todo = new Todo(action.text);
      return state.set(todo.get('id'), todo);
    default:
      return state
  }
}
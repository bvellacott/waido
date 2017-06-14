import { ADD_TODO, TOGGLE_TODO } from '../actions/todo';
import { Map, List } from 'immutable';
import { create as Todo } from '../schema/todo' 

export default function todoApp(state = Map(), action) {
	var todo;
  switch (action.type) {
    case ADD_TODO:
    	todo = new Todo(action.text);
      return state.set(todo.get('id'), todo);
    case TOGGLE_TODO:
    	var todo = state.get(action.index);
    	todo = todo.set('completed', !todo.get('completed'));
		  return state.set(action.index, todo);
    default:
      return state
  }
}
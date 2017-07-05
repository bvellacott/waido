import { ADD_TODO, TOGGLE_TODO, SELECT_TODO, CHANGE_TITLE } from '../actions/todo';
import { Map, List } from 'immutable';
import { create as Todo } from '../schema/todo' 

export default function todoApp(state = Map(), action) {
	var todo;
  switch (action.type) {
    case ADD_TODO:
      state = state.map(todo => todo.set('selected', false))
    	todo = new Todo(action.todo);
      return state.set(todo.get('id'), todo);
    case TOGGLE_TODO:
      var todo = state.get(action.index);
      todo = todo.set('completed', !todo.get('completed'));
      return state.set(action.index, todo);
    case SELECT_TODO:
      return state.map(todo => todo.set('selected', todo.get('id') === action.index))
    case CHANGE_TITLE:
    	var todo = state.get(action.index);
    	todo = todo.set('text', action.value);
		  return state.set(action.index, todo);
    default:
      return state
  }
}
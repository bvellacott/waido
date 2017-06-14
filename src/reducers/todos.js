import { VisibilityFilters } from '../actions/todo';
import { Map, List } from 'immutable';
import { create as Todo } from '../schema/todo' 

export default function todoApp(state = List(), action) {
  switch (action.type) {
    case VisibilityFilters.ADD_TODO:
      return state.push(new Todo(action.text));
    case VisibilityFilters.TOGGLE_TODO:
    	var todo = state.get(action.index);
    	todo = todo.set(action.index, !todo.get('completed'));
		  return state.set(action.index, todo);
    default:
      return state
  }
}
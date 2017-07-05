/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SELECT_TODO = 'SELECT_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const CHANGE_TITLE = 'CHANGE_TITLE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(todo) {
  return { type: ADD_TODO, todo }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function selectTodo(index) {
  return { type: SELECT_TODO, index }
}

export function editTodo(index) {
  return { type: EDIT_TODO, index }
}

export function changeTitle(index, value) {
  return { type: CHANGE_TITLE, index, value }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
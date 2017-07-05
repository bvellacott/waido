import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.get('visibilityFilter');
const getTodos = (state) => state.get('shared').get('todos').toList();

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (filter, todos) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.get('completed'))
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.get('completed'))
      default:
        return todos
    }
  }
)

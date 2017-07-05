import { connect } from 'react-redux'
import { toggleTodo, selectTodo, changeTitle, editTodo } from '../actions/todo'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../selectors';

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(selectTodo(id))
    },
    onSelectedTodoClick: (id) => {
      dispatch(editTodo(id))
    },
    onTitleChange: (id, event) => {
      dispatch(changeTitle(id, event.target.value))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
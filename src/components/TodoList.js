import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (<ul>
    {todos.map(todo => {
        return (<Todo 
          key={todo.get('id')}
          text={todo.get('text')}
          completed={todo.get('completed')} 
          onClick={() => onTodoClick(todo.get('id'))}
        />)
      }
    )}
  </ul>
)

TodoList.propTypes = {
  todos: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
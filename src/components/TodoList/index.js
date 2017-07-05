import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Todo from '../Todo';
import './style.scss';
import { calculatePositions } from '../Todo/todoApi';

const TodoList = ({ todos, onTodoClick, onTitleChange }) => {
  var ids = todos.filter(todo => !todo.get('selected')).map(todo => todo.get('id')).toJS();
  var positions = calculatePositions(ids, 80);
  return (<div className="TodoList">
    {todos.map(todo => {
        var pos = todo.get('selected') ? [10, 100] : positions[todo.get('id')];
        return (<Todo 
          key={todo.get('id')}
          text={todo.get('text')}
          selected={todo.get('selected')} 
          completed={todo.get('completed')} 
          onClick={() => onTodoClick(todo.get('id'))}
          onTitleChange={event => onTitleChange(todo.get('id'), event)}
          x={pos[0]} y={pos[1]}
        />)
      }
    )}
  </div>
);}

TodoList.propTypes = {
  todos: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
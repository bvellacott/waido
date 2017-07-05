import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Button from '../Button';

const Todo = ({ onClick, onTitleChange, selected, completed, text, x, y }) => {
  var outerStyle = {
    top: selected ? y : 300 + y,
    left: selected ? x : 700 + x,
    width: selected ? 300 : 160,
    height: selected ? 700 : 160,
  };

  var textAreaStyle = {
    top: 16,
    left: 16,
    width: outerStyle.width - 32,
    height: outerStyle.height - 32,
    resize: 'none'
  };

  var textSpanStyle = Object.assign({}, textAreaStyle);

  if(selected) {
    textSpanStyle.top = textAreaStyle.top += 64;
    textSpanStyle.height = textAreaStyle.height -= 64;
    textSpanStyle['border-top-left-radius'] = textAreaStyle['border-top-left-radius'] = 32;
    textSpanStyle['border-top-right-radius'] = textAreaStyle['border-top-right-radius'] = 32;
    textAreaStyle.zIndex = '1';

    textSpanStyle.zIndex = '-1';
  }

  var innerStyle = {
    top: 14.4,
    left: 14.4,
    width: outerStyle.width - (160 * .18),
    height: outerStyle.height - (160 * .18),
    zIndex: 1000
  };

  return (<div
      className="Todo"
      onClick={onClick}
      style={outerStyle}
    >
      <div className="outer" style={outerStyle}>
        <Button x={0} y={-16} show={selected} />
        <Button x={32} y={-36} show={selected} />
        <textarea value={text} onChange={onTitleChange} style={textAreaStyle}/>
        <span style={textSpanStyle}><div style={{margin:'2rem 0 0 0 '}}>{text}</div></span>
        <div className="inner" style={innerStyle}/>
      </div>
    </div>)
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

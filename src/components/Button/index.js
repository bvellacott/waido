import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = ({ 
  x = 0, y = 0, 
  width = 32, height = 32, 
  text = null, show, 
  onClick = e => alert('not implemented'), 
  position = null }) => {
  var outerStyle = {  
    top: y,
    left: x,
    // width: show ? width : 0,
    // height: show ? height : 0,
  };
  var innerStyle = {
    top: 2.88,
    left: 2.88,
    width: !text ? (show ? outerStyle.width - (width * .18) : 0) : null,
    height: !text ? (show ? outerStyle.height - (width * .18) : 0) : null,
    zIndex: 1000
  };

  if(position)
    outerStyle.postion = position;

  if(show) {
    if(!text) {
    outerStyle.width = width;
    outerStyle.height = height;
    }
    else {
      innerStyle.padding = '.5rem';
    }
  }
  else {
    outerStyle.width = 0;
    outerStyle.height = 0;
  }

  var iconStyle = {
    position: 'relative',
    top: innerStyle.height/2 - 9,
    'font-size': show ? 16 : 0,
  }

  return (
    <div className="Button" style={outerStyle} onClick={onClick}>
      <div className="btn-outer" style={outerStyle}>
        <div className="btn-inner" style={innerStyle}>{text}</div>
      </div>
    </div>)
}

export default Button;



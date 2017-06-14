import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route, Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li><Link to='/foo'>foo</Link></li>
          <li><Link to='/bar'>bar</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;

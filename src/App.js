import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route, Link } from 'react-router'
import { connect } from 'react-redux'

import { addTodo } from './actions/todo'

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Button from './components/Button';

let App = ({ dispatch }) => (
  <div>
    <Button position="static" show="true" onClick={ e => dispatch(addTodo({ text: '', completed: false, selected: true }))} text="Add todo"/>
    <VisibleTodoList />
  </div>
)
    // <Footer />

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <ul>
//           <li><Link to='/foo'>foo</Link></li>
//           <li><Link to='/bar'>bar</Link></li>
//         </ul>
//         {this.props.children}
//       </div>
//     );
//   }
// }
App = connect()(App)

export default App;

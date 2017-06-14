import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route, Link } from 'react-router'

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

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

export default App;

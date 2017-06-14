import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route } from 'react-router'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import '../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
import './index.scss';

import { store, history } from './Framework';

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" component={() => { return (<h1>Hello Foo!</h1>); }}/>
        <Route path="bar" component={() => { return (<h1>Hello Bar!</h1>); }}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

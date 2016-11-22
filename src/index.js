import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './Components/App';
import Home from './Components/Home';
import Child1 from './Components/Child1';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="child1" component={Child1} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);


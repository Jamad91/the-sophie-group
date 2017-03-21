'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import ForSale from './components/ForSale'
import ForRent from './components/ForRent'
import Contact from './components/Contact'

ReactDOM.render(
    <div>
      <Navbar />
      <Router history={browserHistory}>
        <Route path="/">
          <Route path="home" component={Home} />
          <Route path="buy" component={ForSale} />
          <Route path="rent" component={ForRent} />
          <Route path="contact" component={Contact} />
          <IndexRoute component={Home} />
        </Route>
      </Router>
    </div>,
  document.getElementById('app')
);

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

// Actions
import { loadForSales, loadForRents } from './action-creators'

const onForSalesEnter = function() {
  const thunk = loadForSales()
  store.dispatch(thunk)
}

const onForRentsEnter = function () {
  const thunk = loadForRents()
  store.dispatch(thunk)
}

ReactDOM.render(
    <Provider store={store}>
      <div>
        <Navbar />
        <Router history={browserHistory}>
          <Route path="/">
            <Route path="home" component={Home} />
            <Route path="buy" component={ForSale} />
            <Route path="rent" component={ForRent} onEnter={onForRentsEnter}/>
            <Route path="contact" component={Contact} onEnter={onForSalesEnter}/>
            <IndexRoute component={Home} />
          </Route>
        </Router>
      </div>
    </Provider>,
  document.getElementById('app')
);

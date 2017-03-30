'use strict'

import React from 'react';
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';
import NotFound from './components/NotFound';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AllForSales from './components/ForSale/AllForSales';
import AllForRents from './components/ForRent/AllForRents';
import SingleForRent from './components/ForRent/SingleForRent';
import AddRentPropertyForm from './components/ForRent/AddRentPropertyForm';
import ContactRentForm from './components/ForRent/ContactRentForm';
import Contact from './components/Contact';


import { fetchAllForRents, fetchSingleForRent } from './action-creators/forRent';
import { fetchAllForSales } from './action-creators/forSale';


const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

const onForRentsEnter = function() {
  const thunk = fetchAllForRents();
  store.dispatch(thunk);
}

const onForRentEnter = function() {
  const thunk = fetchSingleForRent();
  store.dispatch(thunk)
}

const onForSalesEnter = function() {
  const thunk = fetchAllForSales();
  store.dispatch(thunk)
}

render (
  <Provider store={store}>
    <div>
      <Navbar />
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={ Home } />
          <Route path="home" component={Home} />
          <Route path="buy" component={AllForSales} onEnter={onForSalesEnter} />
          <Route path="rent" component={AllForRents} onEnter={onForRentsEnter} />
          <Route path="rent/:id" component={SingleForRent} />
          <Route path="add" component={AddRentPropertyForm} />
          <Route path="contactrent" component={ContactRentForm} />
          <Route path="contact" component={Contact} />
          <Route path="login" component={ExampleApp} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('main')
)
// <IndexRedirect to="home" />

'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import Navbar from './components/Navbar'
import Home from './components/Home'
import ForSale from './components/ForSale'
import ForRent from './components/ForRent'
import Contact from './components/Contact'

import { fetchAllForRents } from './action-creators/forRent'
import { fetchAllForSales } from './action-creators/forSale'


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
          <Route path="buy" component={ForSale} onEnter={onForSalesEnter} />
          <Route path="rent" component={ForRent} onEnter={onForRentsEnter}/>
          <Route path="contact" component={Contact} />
          <Route path="login" component={ExampleApp} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('main')
)
// <IndexRedirect to="home" />

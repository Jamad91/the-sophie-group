'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
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

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <Route path="home" component={Home} />
        <Route path="buy" component={ForSale} />
        <Route path="rent" component={ForRent} onEnter={onForRentsEnter}/>
        <Route path="contact" component={Contact} onEnter={onForSalesEnter}/>
        <IndexRoute component={Home} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)

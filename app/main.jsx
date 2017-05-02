'use strict'

import React from 'react';
import {Router, Route, IndexRedirect, IndexRoute, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import axios from 'axios';
import store from './store';

// STATIC COMPONENTS
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

// FOR SALE COMPONENTS
import AllForSales from './components/ForSale/AllForSales';
import SingleForSale from './components/ForSale/SingleForSale';
import AddSalePropertyForm from './components/ForSale/AddSalePropertyForm';
// import UpdateForSale from './components/ForSale/UpdateForSale';
import AllSold from './components/ForSale/AllSold';

// FOR RENT COMPONENTS
import AllForRents from './components/ForRent/AllForRents';
import SingleForRent from './components/ForRent/SingleForRent';
import AddRentPropertyForm from './components/ForRent/AddRentPropertyForm';

// BLOG COMPONENTS
import AllBlogPosts from './components/Blog/AllBlogPosts';

// ACTIONS
import { fetchAllForRents, fetchSingleForRent } from './action-creators/forRent';
import { fetchAllForSales, fetchSingleForSale } from './action-creators/forSale';
import { fetchAllBlogPosts, fetchSingleBlogPost } from './action-creators/blog';


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

const onForRentEnter = function(nextRouterState) {
  const forRentId = nextRouterState.params.id;
  const thunk = fetchSingleForRent(forRentId)
  store.dispatch(thunk)
}

const onForSalesEnter = function() {
  const thunk = fetchAllForSales();
  store.dispatch(thunk)
}

const onForSaleEnter = function(nextRouterState) {
  const forSaleId = nextRouterState.params.id;
  const thunk = fetchSingleForSale(forSaleId);
  store.dispatch(thunk)
}

const onBlogPostsEnter = function() {
  const thunk = fetchAllBlogPosts();
  store.dispatch(thunk);
}
// <Route path="buy/:id/update" component={UpdateForSale} onEnter={onForSaleEnter}/>

render (
  <Provider store={store}>
    <div>
      <Navbar />
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={ Home } />
          <Route path="home" component={Home} />
          <Route path="buy" component={AllForSales} onEnter={onForSalesEnter} />
          <Route path="buy/:id" component={SingleForSale} onEnter={onForSaleEnter} />
          <Route path="sold" component={AllSold} onEnter={onForSalesEnter} />
          <Route path="rent" component={AllForRents} onEnter={onForRentsEnter} />
          <Route path="rent/:id" component={SingleForRent} onEnter={onForRentEnter} />
          <Route path="news" component={AllBlogPosts} onEnter={onBlogPostsEnter}/>
          <Route path="contact" component={Contact} />
          <Route path="login" component={ExampleApp} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('main')
)
// <IndexRedirect to="home" />

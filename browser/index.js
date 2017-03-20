'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// Components
import Navbar from './components/Navbar'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Navbar />
      <div className="container flexbox-container">
        <div className="jumbotron">
        </div>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);

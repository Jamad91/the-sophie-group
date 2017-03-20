'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider>
    <div className="container flexbox-container">
      <div className="jumbotron">
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);

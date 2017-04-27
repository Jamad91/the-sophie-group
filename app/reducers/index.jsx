import { combineReducers } from 'redux';

import authReducer from './auth';
import forSalesReducer from './forSale';
import forRentsReducer from './forRent';
import blogPostsReducer from './blog';

const rootReducer = combineReducers({
  auth: authReducer,
  forSalesReducer,
  forRentsReducer,
  blogPostsReducer
})

export default rootReducer

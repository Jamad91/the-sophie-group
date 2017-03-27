import { combineReducers } from 'redux';

import authReducer from './auth';
import forSalesReducer from './forSale';
import forRentsReducer from './forRent';

const rootReducer = combineReducers({
  auth: authReducer,
  forSalesReducer,
  forRentsReducer
})

export default rootReducer

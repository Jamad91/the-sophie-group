import { combineReducers } from 'redux';

import authReducer from './auth';
import forSaleReducer from './forSale';
import forRentReducer from './forRent';

const rootReducer = combineReducers({
  auth: authReducer,
  forSalesReducer,
  forRentsReducer
})

export default rootReducer

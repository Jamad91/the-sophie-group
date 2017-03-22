import { combineReducers } from 'redux';

function forSaleReducer (state =[], action) {
  return state
};

function forRentReducer (state = [], action) {
  return state
}

const rootReducer = combineReducers({
  forSale: forSaleReducer,
  forRent: forRentReducer
});

export default rootReducer;

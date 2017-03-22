import { combineReducers } from 'redux';

function forSaleReducer (state =[], action) {
  return state
};

function forRentReducer (state = [], action) {
  
}

const rootReducer = combineReducers({
  forSale: forSaleReducer
});

export default rootReducer;

import { combineReducers } from 'redux';

function forSaleReducer (state =[], action) {
  return state
};

const rootReducer = combineReducers({
  forSale: forSaleReducer
});

export default rootReducer;

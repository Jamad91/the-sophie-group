import {RECEIVE_ALL_FOR_SALES, SELECT_SINGLE_FOR_SALE} from 'APP/app/constants';

const DEFAULT_STATE = {
  allForSales: [],
  selectedForSale: {}
}

function forSalesReducer (state = DEFAULT_STATE, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_FOR_SALES:
      newState.allForSales = action.allForSales;
      break;
    case SELECT_SINGLE_FOR_SALE:
      newState.selectedForSale = action.forSale;
      break;
    default:
      return state;
  }

  return newState
};

export default forSalesReducer;

import {RECEIVE_ALL_FOR_SALES, SELECT_SINGLE_FOR_SALE, ADD_FOR_SALE_PROPERTY} from 'APP/app/constants';

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
    case ADD_FOR_SALE_PROPERTY:
      let dummy = newState.allForSales.slice(0)
      dummy.push(action.forSaleInfo)
      newState.allForSales = dummy;
      break;
    default:
      return state;
  }
  return newState
};

export default forSalesReducer;

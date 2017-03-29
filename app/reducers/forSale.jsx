import {RECEIVE_FOR_SALES, SELECT_FOR_SALE} from 'APP/app/constants';

const DEFAULT_STATE = {
  allForSales: []
  // selectedForSale: {}
}

function forSalesReducer (state = DEFAULT_STATE, action) {
  const newState = Object.assign({}, state)
  // console.log('REDCUER STATE', state);
  // console.log('REDCER NEWSTATE', newState);
  switch (action.type) {
    case RECEIVE_FOR_SALES:
      newState.allForSales = action.forSales;
      break;
    // case SELECT_FOR_SALE:
    //   newState.selectedForSale = action.forSale;
    //   break;
    default:
      return state;
  }

  return newState
};

export default forSalesReducer;

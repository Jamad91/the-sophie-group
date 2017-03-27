const RECEIVE_FOR_SALES = 'RECEIVE_FOR_SALES';

const DEFAULT_STATE = {
  allForSales: [],
  selectedForSale: {}
}

function forSalesReducer (state = DEFAULT_STATE, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_FOR_SALES:
      newState.allForSales = action.forSales;
      break;
    case SELECET_FOR_RENT:
      newState.selectedForSale = action.forSale;
    default:
      return state;
  }

  return newState
};

export default forSales

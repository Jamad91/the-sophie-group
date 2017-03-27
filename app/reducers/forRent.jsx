const RECEIVE_FOR_RENTS = 'RECEIVE_FOR_RENTS';

const DEFAULT_STATE = {
  allForRents: [],
  selectedForRent: {}
}

function forRentsReducer (state = DEFAULT_STATE, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_FOR_RENTS:
      newState.allForRents = action.forRents;
      break
    case SELECET_FOR_RENT:
      newState.selectedForRent = action.forRent;
      break;
    default:
      return state
  }

  return newState
}

export default forRentsReducer;

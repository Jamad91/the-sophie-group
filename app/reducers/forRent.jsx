import {RECEIVE_FOR_RENTS, SELECT_FOR_RENT} from 'APP/app/constants';

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
    case SELECT_FOR_RENT:
      newState.selectedForRent = action.forRent;
      break;
    default:
      return state
  }

  return newState
}

export default forRentsReducer;

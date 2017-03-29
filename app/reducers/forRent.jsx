import {RECEIVE_ALL_FOR_RENTS, SELECT_FOR_RENT} from 'APP/app/constants';

const DEFAULT_STATE = {
  allForRents: []
  // selectedForRent: {}
}

function forRentsReducer (state = DEFAULT_STATE, action) {
  const newState = Object.assign({}, state)

  console.log('ACTION', action.type);

  switch (action.type) {
    case RECEIVE_ALL_FOR_RENTS:
      newState.allForRents = action.allForRents;
      break
    // case SELECT_FOR_RENT:
    //   newState.selectedForRent = action.forRent;
    //   break;
    default:
      return state
  }

  return newState
}

export default forRentsReducer;

import {RECEIVE_ALL_FOR_RENTS, SELECT_SINGLE_FOR_RENT, ADD_FOR_RENT_PROPERTY} from 'APP/app/constants';

const DEFAULT_STATE = {
  allForRents: [],
  selectedForRent: {}
}

function forRentsReducer (state = DEFAULT_STATE, action) {
  const newState = Object.assign({}, state)
  console.log('REDCUCTION MAN',action);
  switch (action.type) {
    case RECEIVE_ALL_FOR_RENTS:
      newState.allForRents = action.allForRents;
      break
    case SELECT_SINGLE_FOR_RENT:
      newState.selectedForRent = action.forRent;
      break;
    case ADD_FOR_RENT_PROPERTY:
      let dummy = newState.allForRents.slice(0)
      dummy.push(action.forRentInfo)
      newState.allForRents = dummy;
      break;
    default:
      return state
  }
  return newState
}

export default forRentsReducer;

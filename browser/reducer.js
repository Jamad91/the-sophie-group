import { RECEIVE_FOR_SALES, RECEIVE_FOR_RENTS} from './action-creators';
import { combineReducers } from 'redux';

const DEFAULT_SALE = [{
  id: 1,
  title: '742 Evergreen Terrace',
  image: './public/assets/742_Evergreen_Terrace.png'
}, {
  id: 2,
  title: '31 Spooner St.',
  image: './public/assets/31_Spooner_Street.jpg'
}, {
  id: 3,
  title: '1600 Pennsylvania Ave.',
  image: './public/assets/1600_Pennsylvania_Avenue.jpg'
}]

const DEFAULT_RENT = [{
  id: 1,
  title: '1600 Pennsylvania Ave.',
  image: './public/assets/1600_Pennsylvania_Avenue.jpg'
}, {
  id: 2,
  title: '31 Spooner St.',
  image: './public/assets/31_Spooner_Street.jpg'
}, {
  id: 3,
  title: '742 Evergreen Terrace',
  image: './public/assets/742_Evergreen_Terrace.png'
}];

function forSaleReducer (state = DEFAULT_SALE, action) {
  switch (action.type) {
    case RECEIVE_FOR_SALES: return action.receivedForSales;
    default: return state;
  }
};

function forRentReducer (state = DEFAULT_RENT, action) {
  switch (action.type) {
    case RECEIVE_FOR_RENTS: return action.receivedForRents;
    default: return state
  }
}

const rootReducer = combineReducers({
  forSales: forSaleReducer,
  forRents: forRentReducer
});

export default rootReducer;

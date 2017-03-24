import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  forRent: require('./forRent').defualt,
  forSale: require('./forSale').defualt
})

export default rootReducer

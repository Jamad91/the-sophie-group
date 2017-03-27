import {RECEIVE_FOR_RENTS, SELECT_FOR_RENT} from 'APP/app/constants';

import axios from 'axios';

export const receiveForRents = forRents => {
  type: RECEIVE_FOR_RENTS,
  forRents
}

export const selectForRent = forRent => {
  type: SELECT_FOR_RENT,
  forRent
}

export const fetchForRents = function() {
  return dispatch => {
    axios.get('./api/forRents')
    .then(res => {
      dispatch(receiveForRents(res.data))
    })
  }
}

export const fetchForRent = function(forRentId) {
  return dispatch => {
    axios.get(`/api/forRent/${forRentId}`)
    .then(res => {
      dispatch(selectForRent(res.data))
    })
  }
}

import {RECEIVE_ALL_FOR_RENTS, SELECT_SINGLE_FOR_RENT} from 'APP/app/constants';

import axios from 'axios';

import store from 'APP/app/store'

const receiveAllForRents = allForRents => ({
  type: RECEIVE_ALL_FOR_RENTS,
  allForRents
})

const selectForRent = forRent => ({
  type: SELECT_SINGLE_FOR_RENT,
  forRent
})

export const fetchAllForRents = function() {
  return dispatch => {
    axios.get('./api/forrent')
    .then(res => {
      dispatch(receiveAllForRents(res.data))
    })
  }
}

export const fetchSingleForRent = function(forRentId) {
  return dispatch => {
    axios.get(`/api/forRent/${forRentId}`)
    .then(res => {
      dispatch(selectForRent(res.data))
    })
  }
}

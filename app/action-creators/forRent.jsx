import {RECEIVE_ALL_FOR_RENTS, SELECT_SINGLE_FOR_RENT, ADD_FOR_RENT_PROPERTY, DELETE_FOR_RENT_PROPERTY} from 'APP/app/constants';

import axios from 'axios';

import store from 'APP/app/store'

const receiveAllForRents = allForRents => ({
  type: RECEIVE_ALL_FOR_RENTS,
  allForRents
})

export const fetchAllForRents = function() {
  return dispatch => {
    axios.get('./api/forrent')
    .then(res => {
      dispatch(receiveAllForRents(res.data))
    })
  }
}

const selectForRent = forRent => ({
  type: SELECT_SINGLE_FOR_RENT,
  forRent
})

export const fetchSingleForRent = function(forRentId) {
  return dispatch => {
    axios.get(`/api/forRent/${forRentId}`)
    .then(res => {
      dispatch(selectForRent(res.data))
    })
  }
}

const addForRentProperty = forRentInfo => ({
  type: ADD_FOR_RENT_PROPERTY,
  forRentInfo
})

export const createForRent = function(info) {
  return dispatch => {
    dispatch(addForRentProperty(info))
    axios.post('/api/forrent', info)
      .catch(err => console.log("Wasn't able to add property", err))
    }
}

export const deleteForRentProperty = forRentId => ({
    type: DELETE_FOR_RENT_PROPERTY,
    forRentId
})

export const destroyForRentProperty = function(id) {
  console.log('ID', id);
  return dispatch => {
    dispatch(deleteForRentProperty(id))
    axios.delete('/api/forrent', id)
      .catch(err => console.log("Wasn't able to delete property", err))
  }
}

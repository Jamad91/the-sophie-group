import {RECEIVE_ALL_FOR_RENTS, SELECT_SINGLE_FOR_RENT, ADD_FOR_RENT_PROPERTY} from 'APP/app/constants';

import axios from 'axios';

import { hashHistory } from 'react-router'

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

export const addForRent = function(info) {
  axios.post('/api/forrent', info)
    .then(res => res.data)
    // .then(property => {
    //   this.setState({
    //     allForRents: [...this.state.allForRents, property]
    //   }, () => {
    //     browserHistory.push(`/rent/${property.id}`)
    //   })
    // })
  // let newProperty = {}
  // store.getState()
  //   .forRentsReducer
  //   .allForRents.forEach(forRent => {
  //   if (forRent.id === newPropertyId) newProperty = forRent
  // })
  // return {
  //   type: ADD_FOR_RENT_PROPERTY,
  //   forRentId: newPropertyId,
  //   forRent: newProperty
  // }
}

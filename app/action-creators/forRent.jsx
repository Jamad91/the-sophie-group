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

const addForRentProperty = forRentInfo => ({
  type: ADD_FOR_RENT_PROPERTY,
  forRentInfo
})

export const createForRent = function(info) {
  console.log('ACTION');
  return dispatch => {
    console.log('DISPATCH');
    dispatch(addForRentProperty(info))
    axios.post('/api/forrent', info)
      .catch(err => console.log("Weren't able to add property", err))
    }
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

import {RECEIVE_ALL_FOR_SALES, SELECT_SINGLE_FOR_SALE, ADD_FOR_SALE_PROPERTY} from 'APP/app/constants';

import axios from 'axios';

import store from 'APP/app/store';

const receiveAllForSales = allForSales => ({
  type: RECEIVE_ALL_FOR_SALES,
  allForSales
})

const selectForSale = forSale => ({
  type: SELECT_SINGLE_FOR_SALE,
  forSale
})

export const fetchAllForSales = function() {
  return dispatch => {
    axios.get('./api/forsale')
    .then(res => {
      dispatch(receiveAllForSales(res.data))
    })
  }
}

export const fetchSingleForSale = function(forSaleId) {
  return dispatch => {
    axios.get(`/api/forSale/${forSaleId}`)
    .then(res => {
      dispatch(selectForSale(res.data))
    })
  }
}

const addForSaleProperty = forSaleInfo => ({
  type: ADD_FOR_SALE_PROPERTY,
  forSaleInfo
})

export const createForSale = function(info) {
  return dispatch => {
    dispatch(addForSaleProperty(info))
    axios.post('/api/forsale', info)
      .catch(err => console.log("Weren't able to add property", err))
    }
}

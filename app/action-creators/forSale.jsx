import {RECEIVE_ALL_FOR_SALES, SELECT_FOR_SALE} from 'APP/app/constants';

import axios from 'axios';

import store from 'APP/app/store';

const receiveAllForSales = allForSales => ({
  type: RECEIVE_ALL_FOR_SALES,
  allForSales
})

const selectForRent = forRent => {
  type: SELECT_FOR_SALE,
  forSale
}

export const fetchAllForSales = function() {
  return dispatch => {
    axios.get('./api/forsale')
    .then(res => {
      dispatch(receiveAllForSales(res.data))
    })
  }
}

export const fetchForSale = function(forSaleId) {
  return dispatch => {
    axios.get(`/api/forSale/${forSaleId}`)
    .then(res => {
      dispatch(selectForSale(res.data))
    })
  }
}

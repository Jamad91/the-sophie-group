import {RECEIVE_FOR_SALES, SELECT_FOR_SALE} from 'APP/app/constants';

import axios from 'axios';

export const receiveForSales = forRents => {
  type: RECEIVE_FOR_SALES,
  forSales
}
//
// export const selectForRent = forRent => {
//   type: SELECT_FOR_SALE,
//   forSale
// }

export const fetchForSales = function() {
  return dispatch => {
    axios.get('./api/forSale')
    .then(res => {
      dispatch(receiveForSales(res.data))
    })
  }
}

// export const fetchForSale = function(forSaleId) {
//   return dispatch => {
//     axios.get(`/api/forSale/${forSaleId}`)
//     .then(res => {
//       dispatch(selectForSale(res.data))
//     })
//   }
// }

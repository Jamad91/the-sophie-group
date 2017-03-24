export const RECEIVE_FOR_SALES = 'RECEIVE_FOR_SALES';
export const RECEIVE_FOR_RENTS = 'RECEIVE_FOR_RENTS';

const receiveForSales = function (properties) {
  return {
    type: RECEIVE_FOR_SALES,
    receivedForSales: properties
  }
}

export const loadForSales = function () {
  return function (dispatch) {
    fetch('/api/buy')
      .then(res=> res.json())
      .then(properties => {
        console.log('PRP', properties);
        const action = receiveForSales(properties);
        dispatch(action);
      })
      .catch(err => console.error(err))
  };
};

const receiveForRents = function (properties) {
  return {
    type: RECEIVE_FOR_RENTS,
    receivedForRents: properties
  }
}

export const loadForRents = function () {
  return function (dispatch) {
    fetch('/api/rent')
      .then(res=> res.json())
      .then(properties => {
        const action = receiveForRents(properties);
        dispatch(action);
      })
      .catch(err => console.error(err))
  };
};

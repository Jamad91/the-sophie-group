import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchForRents } from '../action-creators/forRents'

class ForRent extends Component {

  render () {
    console.log(this.props);
    return (
      <div>
        <h1 id="title">For Rent</h1>
          <div className="container flexbox-container">
            <div className="jumbo">
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  console.log('STATE', state);
  return {
    forRents: state.forRentsReducer.allForRents
  }
}

const mapDispatchToProps = function (dispatch) {
  console.log('DISPATCH',dispatch);

  return {
    onLoadForRents: function () {
      const thunk = fetchForRents();
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForRent)

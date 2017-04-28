import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSingleForSale} from '../../action-creators/forSale'

class UpdateForSale extends Component {
  render() {
    console.log(this.props.forSale);
    return(
      <div className="container flexbox-container">
        <div className="jumbotron">
          <h1>UPDATE PROPERTY</h1>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  console.log('state', state);
  return {
    forSale: state.forSalesReducer.selectedForSale
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onLoadSingleForSale: function() {
      const forSaleId = ownProps.param.forSaleId;
      const thunk = fetchSingleForSale(forSaleId);
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForSale);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllForRents } from '../action-creators/forSale'

// export default
class ForSale extends Component {
  render () {
    console.log('SALE PROPS', this.props);
    return (
      <div>
        <h1 id="title">For Sale</h1>
          <div className="container flexbox-container">
            <div className="jumbo">
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    forSales: state.forSalesReducer.allForSales
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    onLoadForSales: function() {
      const thunk = fetchForSales();
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForSale);

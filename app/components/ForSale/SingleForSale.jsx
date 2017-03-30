import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchSingleForSale } from '../../action-creators/forSale';

class SingleForSale extends Component {

  render() {

    return (
      <div>
        <div className="container flexbox-container">
          <div className="jumbo">
            <h1>no no no</h1>
            {this.props.forSale.title}
          </div>
        </div>
      </div>
    )

  }
}

const mapStateToProps = function(state) {
  return {
    forSale: state.forSalesReducer.selectedForSale
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onLoadSingleForSale: function() {
      const forSaleId = ownProps.param.forSaleId;
      const thunk = fetchSingleForSale(forSaleId);
      dispatch(thunk);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleForSale);

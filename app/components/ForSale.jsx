import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllForRents } from '../action-creators/forSale'

class ForSale extends Component {

  render () {

    console.log('SALE PROPS', this.props);

    const properties = this.props.forSales

    return (
      <div>
        <h1 id="title">For Sale</h1>
          <div className="container flexbox-container">
            <div className="jumbo">
              {
                properties.map(property => {
                  return (
                    <div key={property.title} className="propertyEntry">
                      <div className="propertyImage">
                        <img src={property.imageURL}></img>
                      </div>
                      <div className="propertyName">
                        <h3>{property.title}</h3>
                      </div>
                    </div>
                  )
                })
              }
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

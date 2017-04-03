import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllForRents } from '../../action-creators/forSale'
import { WhoAmI } from '../WhoAmI';
import { Link } from 'react-router';
import AddSalePropertyForm from './AddSalePropertyForm';

class AllForSale extends Component {

  render () {
    const properties = this.props.forSales;
    const user = this.props.user;

    return (
      <div>
        <h1 id="title">For Sale</h1>
          <div className="container flexbox-container">
            <div className="jumbo">
              {
                properties.map(property => {
                  return (
                    <div key={property.title} className="propertyEntry">
                      <Link href={`/buy/${property.id}`}>
                        <div className="propertyImage">
                          <img src={property.imageURL}></img>
                        </div>
                        <div className="propertyName">
                          <h3>{property.title}</h3>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
              <div>
                {user ? <AddSalePropertyForm /> : null}
              </div>
            </div>

          </div>
      </div>
    )
  }

}

const mapStateToProps = function(state) {
  return ({
    forSales: state.forSalesReducer.allForSales,
    user: state.auth
  })
}

const mapDispatchToProps = function(dispatch) {
  return {
    onLoadForSales: function() {
      const thunk = fetchForSales();
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllForSale);

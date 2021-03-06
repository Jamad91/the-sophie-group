import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllForRents, destroyForSaleProperty } from '../../action-creators/forSale'
import { WhoAmI } from '../WhoAmI';
import { Link } from 'react-router';
import AddSalePropertyForm from './AddSalePropertyForm';
import Footer from '../Footer';


class AllSold extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    let propertyId = +evt.target.dataset.id
    this.props.destroyForSaleProperty(propertyId)
  }


  render () {
    const properties = this.props.forSales;
    const user = this.props.user;

    function priceConvert(price) {
        let rev = String(price).split('')
        var j = 1;
        for(var i = rev.length - 1; i >= 0; i--) {
          if (j % 3 === 0 && i != 0) {
            rev.splice(i, 0, ',')
          }
          j++;
        }
        return rev
    }

    return (
      <div>
        <h1 id="title">Sold</h1>
          <div className="container flexbox-container">
            <div className="jumbotron">
              <div className="listings">
                {
                  properties.map(property => {
                    if (property.sold) {
                      return (
                        <div key={property.address1} className="propertyEntry">
                          <Link href={`/buy/${property.id}`}>
                            <h3>{property.address1}</h3>
                            <h3>{property.address2}</h3>
                            <img src={property.mainImageUrl}></img>
                            <h3>${priceConvert(property.price)}</h3>
                            <span>Size: {property.squareFeet} ft²</span><br />
                            <span>Bathrooms: {property.bathroomNum}</span><br />
                            <span>Bedrooms: {property.bedroomNum}</span><br />
                          </Link>
                          <div>
                            {user
                              ? <button className="delete" data-id={property.id} onClick={(e) => this.handleClick(e)}>Delete</button>
                              : null
                            }
                          </div>
                        </div>
                      )
                    }
                  })
                }
              </div>
              {user ? <AddSalePropertyForm /> : null}
              <div id="multi-footer">
                <br />
                <hr />
                <Footer />
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
    destroyForSaleProperty: (property) => dispatch(destroyForSaleProperty(property))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllSold);

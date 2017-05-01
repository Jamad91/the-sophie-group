import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllForRents, destroyForSaleProperty } from '../../action-creators/forSale'
import { WhoAmI } from '../WhoAmI';
import { Link } from 'react-router';
import AddSalePropertyForm from './AddSalePropertyForm';

class AllForSale extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    let propertyId = +evt.target.dataset.id
    this.props.destroyForSaleProperty(propertyId)
  }


  render () {
    console.log('props', this.props);
    const properties = this.props.forSales;
    const user = this.props.user;
    return (
      <div>
        <h1 id="title">For Sale</h1>
          <div className="container flexbox-container">
            <div className="jumbotron">
              <div className="listings">
                {
                  properties.map(property => {
                    if (!property.sold) {
                      return (
                        <div key={property.address1} className="propertyEntry">
                          <Link href={`/buy/${property.id}`}>
                              <img src={property.mainImageUrl}></img>
                              <h3>{property.address1}</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllForSale);

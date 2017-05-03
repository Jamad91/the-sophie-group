import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllForRents, destroyForRentProperty } from '../../action-creators/forRent'
import { WhoAmI } from '../WhoAmI';
import { Link } from 'react-router';
import AddRentPropertyForm from './AddRentPropertyForm';
import Footer from '../Footer';


class AllForRent extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    let propertyId = +evt.target.dataset.id
    this.props.destroyForRentProperty(propertyId)
  }


  render () {
    const properties = this.props.forRents;
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
        <h1 id="title">For Rent</h1>
          <div className="container flexbox-container">
            <div className="jumbotron">
              <div className="listings">
                {
                  properties.map(property => {
                    return (
                      <div key={property.address1} className="propertyEntry">
                        <Link href={`/rent/${property.id}`}>
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
                  })
                }
              </div>
              {user ? <AddRentPropertyForm /> : null}


              <div className="footer">
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
    forRents: state.forRentsReducer.allForRents,
    user: state.auth
  })
}

const mapDispatchToProps = function(dispatch) {
  return {
    destroyForRentProperty: (property) => dispatch(destroyForRentProperty(property))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllForRent);

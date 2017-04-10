import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllForRents, destroyForRentProperty } from '../../action-creators/forRent'
import { WhoAmI } from '../WhoAmI';
import { Link } from 'react-router';
import AddRentPropertyForm from './AddRentPropertyForm';

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

    return (
      <div>
        <h1 id="title">For Rent</h1>
          <div className="container flexbox-container">
            <div className="jumbotron">
              <div className="listings">
                {
                  properties.map(property => {
                    var images = property.images.split(', ');
                    return (
                      <div key={property.address1} className="propertyEntry">
                        <Link href={`/rent/${property.id}`}>
                            <img src={images[0]}></img>
                            <h3>{property.address1}</h3>
                        </Link>
                        <div>
                          {user
                            ? <div className="delete" data-id={property.id} onClick={(e) => this.handleClick(e)}>X</div>
                            : null
                          }
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              {user ? <AddRentPropertyForm /> : null}
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

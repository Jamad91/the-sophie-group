import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllForRents, deleteForRentProperty, destroyForRentProperty } from '../../action-creators/forRent';
import { WhoAmI } from '../WhoAmI';
import { Link } from 'react-router';
import AddRentPropertyForm from './AddRentPropertyForm'

import store, { forRentsReducer } from 'APP/app/store'

class AllForRent extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    let propertyId = +evt.target.dataset.id
    console.log('PROP ID', +evt.target.dataset);
    this.props.destroyForRentProperty(propertyId)
  }


  render () {
    // console.log('STUFF',this.props);
    const properties = this.props.forRents;
    const user = this.props.user;
    // console.log('PROERTIES', properties);
    return (
      <div>
        <h1 id="title">For Rent</h1>
          <div className="container flexbox-container">
            <div className="jumbo">
              {
                properties.map(property => {
                  return (
                    <div key={property.title} className="propertyEntry">
                      <Link href={`/rent/${property.id}`}>
                        <div className="propertyImage">
                          <img src={property.imageURL}></img>
                        </div>
                        <div className="propertyName">
                          <h3>{property.title}</h3>
                        </div>
                      </Link>
                      <div>
                        {user
                          ? <div className="delete" data-id={property.id} onClick={(e) => this.handleClick(e)}>
                            </div>
                          : null
                        }
                      </div>
                    </div>
                  )
                })
              }
              <div>
                {user ? <AddRentPropertyForm /> : null}
              </div>
            </div>

          </div>
      </div>
    )
  }

}

const mapStateToProps = function (state) {
  return ({
    forRents: state.forRentsReducer.allForRents,
    user: state.auth
  })
}

const mapDispatchToProps = function (dispatch) {
  return {
    destroyForRentProperty: (property) => dispatch(destroyForRentProperty(property))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllForRent)

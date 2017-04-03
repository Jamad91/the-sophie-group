import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllForRents } from '../../action-creators/forRent';
import { WhoAmI } from '../WhoAmI';
import { Link } from 'react-router';
import AddRentPropertyForm from './AddRentPropertyForm'

import store, { forRentsReducer } from 'APP/app/store'

class AllForRent extends Component {

  render () {
    const properties = this.props.forRents;
    const user = this.props.user;

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
    onLoadForRents: function () {
      const thunk = fetchForRents();
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllForRent)

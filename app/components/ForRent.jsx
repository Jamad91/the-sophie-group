import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllForRents } from '../action-creators/forRent'

class ForRent extends Component {

  render () {

    const properties = this.props.forRents

    console.log('RENT PROPS', this.props);
    return (
      <div>
        <h1 id="title">For Rent</h1>
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

const mapStateToProps = function (state) {
  return {
    forRents: state.forRentsReducer.allForRents
  }
}

const mapDispatchToProps = function (dispatch) {
  // console.log('ISPATCH',dispatch);

  return {
    onLoadForRents: function () {
      const thunk = fetchForRents();
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForRent)

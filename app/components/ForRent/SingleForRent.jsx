import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleForRent } from '../../action-creators/forRent';
import ContactRentForm from './ContactRentForm'

class SingleForRent extends Component {

  render() {
    const property = this.props.forRent
    console.log('RENT', property);
    console.log('images', property.images);
    const images = property.images ? property.images.split(', ') : [property.images]
    return (
        <div className="container flexbox-container">
          <div className="jumbotron property">
            <div id="property-info">
              <h2>{property.address1}</h2>
              <img src={images[0]} />
            </div>
            <div id="property-contact">
              <ContactRentForm />
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    forRent: state.forRentsReducer.selectedForRent
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onLoadSingleForRent: function () {
      const forRentId = ownProps.params.forRentId;
      const thunk = fetchSingleForRent(forRentId);
      dispatch(thunk);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleForRent);

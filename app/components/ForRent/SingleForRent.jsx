import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleForRent } from '../../action-creators/forRent';
import ContactRentForm from './ContactRentForm'
import ImageSlider from '../ImageSlider'

class SingleForRent extends Component {

  render() {
    const property = this.props.forRent
    console.log('RENT', property);
    console.log('images', property.images);
    const images = property.images ? property.images.split(', ') : [property.images]
    return (
        <div className="container flexbox-container">
          <div className="jumbotron">
            <div id="property">
              <div id="property-info">
                <img src={images[0]} />


<ImageSlider />




                <h3>{property.address1}</h3>
                <h3>{property.address2}</h3>
                <p>{property.description}</p>
              </div>
              <div id="property-contact">
                <h2>Contact us about this property</h2>
                <ContactRentForm />
              </div>
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

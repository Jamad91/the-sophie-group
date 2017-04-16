import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleForRent } from '../../action-creators/forRent';
import ContactRentForm from './ContactRentForm'
import ImageSlider from '../ImageSlider'

'use strict'

class SingleForRent extends Component {

  render() {
    const property = this.props.forRent;
    let images;
    property.extraImageUrls ? images = property.extraImageUrls.split(', ') : images = [];
    // <img src={property.mainImageUrl} />
    // console.log('OLD IMAGES', images);
    images.unshift(property.mainImageUrl)
    // console.log('NEW IMAGES', images);

    function isImage(el, array) {
      for (var i = 0; i < array.length; i++) {
        if (el === array[i]) {return i}
      }
      return -1
    }
    return (
        <div className="container flexbox-container">
          <div className="jumbotron">
            <div id="address"><h2>{property.address1}</h2></div>
            <div id="property">
              <div id="property-info">
                <div className="wrapper row">
                  <div className="preview col-lg-10">

                    <div className="preview-pic tab-content">
                      <div className="tab-pane active" id={isImage(property.mainImageUrl, images)}><img src={property.mainImageUrl} /></div>

                      {
                        images.map(image=>{
                          return(
                            <div className="tab-pane" key={isImage(image, images)} id={isImage(image, images)}><img src={image} /></div>
                          )
                        })
                      }
                    </div>
                    <ul className="preview-thumbnail nav nav-tabs">
                    {
                      images.map(image => {
                        return (
                                <li key={`#${isImage(image, images)}`}><a data-target={`#${isImage(image, images)}`} data-toggle="tab"><img src={image} /></a></li>
                          )
                      })
                    }
                  </ul>
                  </div>
                  <div id="specs">
                    <div className="row">
                      <div className="rowEntry">Bedrooms: {property.bedroomNum}</div>
                    </div>
                    <div className="row">
                      <div className="rowEntry">Bathrooms: {property.bathroomNum}</div>
                    </div>
                    <div className="row">
                      <div className="rowEntry">Size: {property.squareFeet} ft²</div>
                    </div>
                  </div>
                </div>
                <div id="property-description"><p>{property.description}</p></div>
              </div>
              <div id="property-contact">
                <h3>Contact us about this property</h3>
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

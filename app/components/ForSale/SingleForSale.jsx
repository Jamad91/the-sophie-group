import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchSingleForSale } from '../../action-creators/forSale';
import ImageSlider from '../ImageSlider'

class SingleForSale extends Component {

  render() {
    const property = this.props.forSale;
    let images;
    property.extraImageUrls ? images = property.extraImageUrls.split(', ') : images = [];
    images.unshift(property.mainImageUrl)

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
                <div className="jumbotron contact">
                  <div className="col-md-4 account-left">
                    <form method="POST" action="http://formspree.io/jdicolandrea@gmail.com">
                      <input type="hidden" name="_subject" value={property.address1} />
                      <input type="hidden" name="_cc" value="zeekyn@gmail.com" />
                      <div>
                        <textarea name="Name" placeholder="Name "></textarea>
                      </div>
                      <div>
                        <textarea name="Phone" placeholder="Phone Number "></textarea>
                      </div>
                      <div>
                        <textarea name="Email" placeholder="Email "></textarea>
                      </div>
                      <div>
                        <textarea name="Questions" placeholder="Questions? "></textarea>
                      </div>
                      <button type="submit">Send</button>
                    </form>
                  </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>    )

  }
}

const mapStateToProps = function(state) {
  return {
    forSale: state.forSalesReducer.selectedForSale
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onLoadSingleForSale: function() {
      const forSaleId = ownProps.param.forSaleId;
      const thunk = fetchSingleForSale(forSaleId);
      dispatch(thunk);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleForSale);

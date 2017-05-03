import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchSingleForRent } from '../../action-creators/forRent';
import GMap from '../Map';
import UpdateForRent from './UpdateForRent';
import NotFound from '../NotFound'
import Footer from '../Footer';

class SingleForRent extends Component {

  render() {
    const property = this.props.forRent;
    let features = [];
    if (property.features) {
      features = property.features.split(', ')
    }

    console.log('mls', property.mls);

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

    let images;
    property.extraImageUrls ? images = property.extraImageUrls.split(', ') : images = [];
    images.unshift(property.mainImageUrl)

    function isImage(el, array) {
      for (var i = 0; i < array.length; i++) {
        if (el === array[i]) {return i}
      }
      return -1
    }

    const fullAddress = `${property.address1} ${property.address2}`
    return (
      <div>
        <h1 id="title">For Rent</h1>
        <div className="container flexbox-container">
          <div className="jumbotron">
            <div id="address">
              <h2>{property.address1}</h2>
              <h2>{property.address2}</h2>
            </div>
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
                    <div className="row title">
                      <strong><h2>${priceConvert(property.price)}</h2></strong>
                    </div>
                    <div className="row title">
                      <strong><em><h3>Facts</h3></em></strong>
                    </div>
                    <div className="row">
                      <h4>Bedrooms: {property.bedroomNum}</h4>
                    </div>
                    <div className="row">
                      <h4>Bathrooms: {property.bathroomNum}</h4>
                    </div>
                    <div className="row">
                      <h4>Size: {property.squareFeet} ft²</h4>
                    </div>
                    <div className="row">
                      <h4>Lot Size: {property.lotSize} ft²</h4>
                    </div>
                    <br />
                    <div className="row title">
                      <strong><em><h3>Features</h3></em></strong>
                    </div>
                    {
                      features.map(feature => {
                        return (
                          <div className="row" key={feature}>
                            <h4>{feature}</h4>
                          </div>
                        )
                      })
                    }
                    <br />
                    <div className="row title">
                      <strong><em><h3>Other Postings</h3></em></strong>
                    </div>
                    <div className="row">
                      <h4><a href={property.zillow}>Zillow</a></h4>
                    </div>
                    <div className="row">
                      <h4><a href={`http://${property.mls}`}>MLS</a></h4>
                    </div>
                  </div>
                </div>
                <div id="property-description"><p>{property.description}</p></div>
                {user ? <UpdateForRent /> : null}
              </div>
              <div id="property-contact">
                <h2>Contact us about this property</h2>
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
                <GMap fullAddress={fullAddress} />
              </div>
            </div>
          <div className="single-footer">
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
  return {
    forRent: state.forRentsReducer.selectedForRent,
    user: state.auth
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

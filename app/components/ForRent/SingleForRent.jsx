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


                  <div id="custom_carousel" className="carousel slide" data-ride="carousel" data-interval="4000">
                      <div className="carousel-inner">
                          <div className="item active">
                              <div className="container-fluid">
                                  <div className="row">
                                      <div className="top col-md-6 col-xs-12"><img src="http://disecor.imaginacolombia.com/assets/mfNTNcc2OcD-1.jpg" className="img-responsive" /></div>
                                      <div className="content col-md-6 col-xs-12">
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="container-fluid">
                                  <div className="row">
                                      <div className="top col-md-6 col-xs-12"><img src="http://disecor.imaginacolombia.com/assets/mfdaC7_IvMS-1.jpg" className="img-responsive" /></div>
                                      <div className="content col-md-6 col-xs-12">
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="item">
                              <div className="container-fluid">
                                  <div className="row">
                                      <div className="top col-md-6 col-xs-12"><img src="http://disecor.imaginacolombia.com/assets/mfiaASNcDB7-1.jpg" className="img-responsive" /></div>
                                      <div className="content col-md-6 col-xs-12">
                                      </div>
                                  </div>
                              </div>
                          </div>


                      </div>
                      <a data-slide="prev" href="#custom_carousel" className="izq carousel-control">‹</a>
                      <a data-slide="next" href="#custom_carousel" className="der carousel-control">›</a>
                              <div className="controls draggable ui-widget-content col-md-6 col-xs-12">
                          <ul className="nav ui-widget-header">

                              <li data-target="#custom_carousel" data-slide-to="0" className="active"><a href="#"><img src="http://disecor.imaginacolombia.com/assets/mfNTNcc2OcD-1.jpg" /><small>Slide One</small></a></li>
                              <li data-target="#custom_carousel" data-slide-to="1"><a href="#"><img src="http://disecor.imaginacolombia.com/assets/mfdaC7_IvMS-1.jpg" /><small>Slide Two</small></a></li>
                              <li data-target="#custom_carousel" data-slide-to="2"><a href="#"><img src="http://disecor.imaginacolombia.com/assets/mfiaASNcDB7-1.jpg" /><small>Slide Three</small></a></li>

                          </ul>
                      </div>
                  </div>




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

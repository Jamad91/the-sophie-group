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
            <div id="property">
              <div id="property-info">

                  <div className="container">
                      <div className="card">
                        <div className="container-fliud">
                          <div className="wrapper row">
                            <div className="preview col-md-6">

                              <div className="preview-pic tab-content">
                                <div className="tab-pane active" id={isImage(property.mainImageUrl, images)}><img src={property.mainImageUrl} /></div>
                                <div className="tab-pane" id="pic-2"><img src="https://thumbs.dreamstime.com/z/house-2427221.jpg" /></div>
                                <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                                <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                                <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
                              </div>
                              <ul className="preview-thumbnail nav nav-tabs">
                                <li className="active"><a data-target={`#${isImage(property.mainImageUrl, images)}`} data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                <li><a data-target="#pic-2" data-toggle="tab"><img src="https://thumbs.dreamstime.com/z/house-2427221.jpg" /></a></li>
                                <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                              </ul>

                            </div>
                          </div>
                        </div>
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




// <div id="custom_carousel" className="carousel slide" data-ride="carousel" data-interval="4000">
//     <div className="carousel-inner">
//         <div className="item active">
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="top col-md-6 col-xs-12"><img src={property.mainImageUrl} className="img-responsive" /></div>
//                     <div className="content col-md-6 col-xs-12">
//                     </div>
//                 </div>
//             </div>
//         </div>
//         {
//           images.map(image => {
//             return(
//               <div className="item">
//                   <div className="container-fluid">
//                       <div className="row">
//                           <div className="top col-md-6 col-xs-12"><img src={image} className="img-responsive" /></div>
//                           <div className="content col-md-6 col-xs-12">
//                           </div>
//                       </div>
//                   </div>
//               </div>
//             )
//           })
//         }
//     </div>
//     <a data-slide="prev" href="#custom_carousel" className="izq carousel-control">‹</a>
//     <a data-slide="next" href="#custom_carousel" className="der carousel-control">›</a>
//             <div className="controls draggable ui-widget-content col-md-6 col-xs-12">
//         <ul className="nav ui-widget-header">
//
//             <li data-target="#custom_carousel" data-slide-to="0" className="active"><a href="#"><img src={property.mainImageUrl} /><small>Slide One</small></a></li>
//             <li data-target="#custom_carousel" data-slide-to="1"><a href="#"><img src="http://disecor.imaginacolombia.com/assets/mfdaC7_IvMS-1.jpg" /><small>Slide Two</small></a></li>
//             <li data-target="#custom_carousel" data-slide-to="2"><a href="#"><img src="http://disecor.imaginacolombia.com/assets/mfiaASNcDB7-1.jpg" /><small>Slide Three</small></a></li>
//
//         </ul>
//     </div>
// </div>

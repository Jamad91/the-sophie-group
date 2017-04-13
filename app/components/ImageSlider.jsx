import React, { Component } from 'react';
// import Slider from 'react-slick';
import ImageGallery from 'react-image-gallery';

export default class ImageSlider extends Component {

  render() {
    return (
      <div className="container">
      		<div className="card">
      			<div className="container-fliud">
      				<div className="wrapper row">
      					<div className="preview col-md-6">

      						<div className="preview-pic tab-content">
      						  <div className="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
      						  <div className="tab-pane" id="pic-2"><img src="https://thumbs.dreamstime.com/z/house-2427221.jpg" /></div>
      						  <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
      						  <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
      						  <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
      						</div>
      						<ul className="preview-thumbnail nav nav-tabs">
      						  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
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
)
  }

}

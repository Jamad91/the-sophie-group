import React, { Component } from 'react';
// import Slider from 'react-slick';
import ImageGallery from 'react-image-gallery';

export default class ImageSlider extends Component {

  render() {
    return (
    <div className="container-fluid">
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
    </div>
)
  }

}

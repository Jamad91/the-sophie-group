import React, { Component } from 'react';
// import Slider from 'react-slick';
import ImageGallery from 'react-image-gallery';

export default class ImageSlider extends Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const images = [
      {
        original: "./assets/1600_Pennsylvania_Avenue.jpg"
      },
      {
        original: "./assets/31_Spooner_Street.jpg"
      },
      {
        original: "./assets/742_Evergreen_Terrace.png"
      }
    ]

    return (
      <ImageGallery
        items={images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}/>
    );
  }

}



class MyComponent extends React.Component {


}


// return (
//   <Slider {...settings}>
//     <div>
//       <h3>1</h3>
//       <div><img src="./assets/31_Spooner_Street.jpg"></img></div>
//     </div>
//     <div>
//       <h3>2</h3>
//       <div><img src="./assets/1600_Pennsylvania_Avenue.jpg"></img></div>
//     </div>
//     <div><h3>3</h3></div>
//     <div><h3>4</h3></div>
//     <div><h3>5</h3></div>
//     <div><h3>6</h3></div>
//   </Slider>

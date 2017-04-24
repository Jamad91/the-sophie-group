// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import { connect } from 'react-redux';
// import Map, { GoogleApiWrapper, Marker, InfoWindow, HeatMap, withGoogleMap, GoogleMap } from 'google-maps-react';
//
//
//
// class Gmap extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
//       showingInfoWindow: false
//     }
// 	};
//
// 	render() {
// 		console.log('Gmap Component rendering with props, state:', this.props, this.state)
//
//     console.log('PROPPY', this.props.google);
//
//     var geocoder;
//     var propLat;
//     var propLong;
//
//     geocoder = new google.maps.Geocoder()
//     console.log(geocoder);
//
//
//     if (this.props.fullAddress) {
//       // geocoder = this.props.google.maps.Geocoder()
//       // console.log('geocoder', geocoder);
//       // if (geocoder) {
//       //   geocoder.geocode({'address': this.props.fullAddress}, (results, status) => {
//       //     if (status == this.props.google.maps.GeocoderStatus.OK) {
//       //       propLat = results[0].geometry.location.lat()
//       //       propLong = result[0].geometry.location.lng()
//       //     }
//       //   })
//       // }
//       // console.log('ITS HERE');
//
//
//     }
//
//     console.log('LATITUDE', propLat);
//
//
// 		if(!this.props.loaded) {
// 			return <div>Loading...</div>
// 		}
//     const { google } = this.props;
//
//     const initialCenter = {
//       lat: 40.705076,
//       lng: -74.0113487
//     }
//
// 		return (
//       <div id="map-wrapper">
//         <Map google={google}
//              style={{width: '20%', height: '45%', position: 'relative'}}
//              className={'map'}
//
//              zoom={16}
//
//              containerStyle={{}}
//              initialCenter={initialCenter}
//              visible={true}>
//              <Marker
//                position={initialCenter} />
//
//         </Map>
//     </div>
// 		)
// 	}
// }
//
//
//
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCBbGIYZPYb5rHB7A8BrdaB_GRvVOv85L0&callback=initMap',
//   version: 3.25,
//   libraries: ['places', 'visualizations']
// })(Gmap)
//



// ---------------------------------------------------------------------------------------------------------------------------



//
// /* global google */
// import React, {
//   Component
// } from "react";
//
// import Map, {
//   withGoogleMap,
//   GoogleMap,
//   GoogleApiWrapper
// } from "react-google-maps";
//
// /*
//  * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
//  */
// const SimpleMapExampleGoogleMap = withGoogleMap(props => {
//   // console logging breaks map render here for some godforsaken reason
//   // console.log('PROPS 1', this.props);
//   return (
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   />)
// });
//
// /*
//  * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
//  */
// export default class SimpleMapExample extends Component {
//   constructor(props) {
//   		super(props);
//   		this.state = {
//         showingInfoWindow: false
//       }
//   	};
//
//   render() {
//     console.log('PROPS 2', this.props);
//     return (
//       <div style={{position: 'absolute'}}>
//
//       <h1>WHAT UP</h1>
//       <SimpleMapExampleGoogleMap
//         containerElement={
//           <div style={{ width: 300, height: 300 }} />
//         }
//         mapElement={
//           <div style={{ width: 300, height: 300 }} />
//         }
//       />
//   </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCBbGIYZPYb5rHB7A8BrdaB_GRvVOv85L0&callback=initMap',
//   version: 3.25,
//   libraries: ['places', 'visualizations']
// })(SimpleMapExample)


// ---------------------------------------------------------------------------------------------------------------------------



// import _ from "lodash";
//
// import React, {
//   Component,
//   PropTypes,
// } from "react";
//
// import FaSpinner from "react-icons/lib/fa/spinner";
//
// // import withScriptjs from "../../../lib/async/withScriptjs";
//
// import withScriptjs, {
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";
//
// /*
//  * This is the modify version of:
//  * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
//  *
//  * Loaded using async loader.
//  */
// const AsyncGettingStartedExampleGoogleMap = _.flowRight(
//   withScriptjs,
//   withGoogleMap,
// )(props => (
//   <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom={3}
//     defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//     onClick={props.onMapClick}
//   >
//     {props.markers.map(marker => (
//       <Marker
//         {...marker}
//         onRightClick={() => props.onMarkerRightClick(marker)}
//       />
//     ))}
//   </GoogleMap>
// ));
//
// export default class AsyncGettingStartedExample extends Component {
//
//   static propTypes = {
//     toast: PropTypes.func.isRequired,
//   };
//
//   state = {
//     markers: [{
//       position: {
//         lat: 25.0112183,
//         lng: 121.52067570000001,
//       },
//       key: `Taiwan`,
//       defaultAnimation: 2,
//     }],
//   }
//
//   handleMapLoad = this.handleMapLoad.bind(this);
//   handleMapClick = this.handleMapClick.bind(this);
//   handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
//
//   handleMapLoad(map) {
//     this._mapComponent = map;
//     if (map) {
//       console.log(map.getZoom());
//     }
//   }
//
//   /*
//    * This is called when you click on the map.
//    * Go and try click now.
//    */
//   handleMapClick(event) {
//     const nextMarkers = [
//       ...this.state.markers,
//       {
//         position: event.latLng,
//         defaultAnimation: 2,
//         key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
//       },
//     ];
//     this.setState({
//       markers: nextMarkers,
//     });
//
//     if (nextMarkers.length === 3) {
//       this.props.toast(
//         `Right click on the marker to remove it`,
//         `Also check the code!`
//       );
//     }
//   }
//
//   handleMarkerRightClick(targetMarker) {
//     /*
//      * All you modify is data, and the view is driven by data.
//      * This is so called data-driven-development. (And yes, it's now in
//      * web front end and even with google maps API.)
//      */
//     const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
//     this.setState({
//       markers: nextMarkers,
//     });
//   }
//
//   render() {
//     return (
//       <AsyncGettingStartedExampleGoogleMap
//         googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg"
//         containerElement={
//           <div style={{ height: `100%` }} />
//         }
//         mapElement={
//           <div style={{ height: `100%` }} />
//         }
//         onMapLoad={this.handleMapLoad}
//         onMapClick={this.handleMapClick}
//         markers={this.state.markers}
//         onMarkerRightClick={this.handleMarkerRightClick}
//       />
//     );
//   }
// }



// ---------------------------------------------------------------------------------------------------------------------------



import Map, {Marker} from 'google-maps-react';
import React, {Component} from 'react'


export default class Gmap extends Component {
  fetchPlaces() {
    const {google} = this.props;
    const service = new google.maps.places.PlacesService(map);
  }
  render() {
    var geocoder = new google.maps.Geocoder()
    // console.log('PROPS', this.props);
    // console.log('GOOGLE',google.maps);
    // console.log('GEOCODER', geocoder);
    const initialCenter = {
          lat: 40.705076,
          lng: -74.0113487
        }

    // var propLat = 0
    // var propLong = 0

    if (this.props.fullAddress) {
      geocoder.geocode({'address': this.props.fullAddress}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          let propLat = results[0].geometry.location.lat()
          let propLong = results[0].geometry.location.lng()
          // console.log('lat', results[0].geometry.location.lat());
          console.log(`LATITUDE: ${propLat} & LONGITUDE: ${propLong}`);
          initialCenter.lat = propLat;
          initialCenter.lng = propLong;
          console.log('CENTER ASYNC',initialCenter);
        }
      })
    }

    console.log('CENTER SYNC',initialCenter);


    return (
      <div id="map-wrapper">
        <Map google={google}
             style={{width: '20%', height: '45%', position: 'relative'}}
             className={'map'}

             zoom={16}

             containerStyle={{}}
             initialCenter={initialCenter}
             visible={true}>
             <Marker
               position={initialCenter} />

        </Map>
      </div>
    )
  }
};

// export default

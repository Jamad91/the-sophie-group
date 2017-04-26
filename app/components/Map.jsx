import Map, {Marker} from 'google-maps-react';
import React, {Component} from 'react';
import Async from 'react-promise';


export default class Gmap extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log('THIS', this);
    console.log('PROPS', props);
  }

  componentDidMount() {
    var geocoder = new google.maps.Geocoder()

    console.log('google', google);

    if (this.props.fullAddress) {
      geocoder.geocode({'address': this.props.fullAddress}, (results, status) => {
        console.log('PLACE',this.props.fullAddress);
        if (status == google.maps.GeocoderStatus.OK) {
        // if (status == google.maps.GeocoderStatus.OK && results[0].formatted_address != "1088 E Gun Hill Rd, Bronx, NY 10469, USA") {
          console.log('Results',results);
          let propLat = results[0].geometry.location.lat()
          let propLong = results[0].geometry.location.lng()
          console.log(`LATITUDE: ${propLat} & LONGITUDE: ${propLong}`);
          this.setState(
            {coordinates: {
              lat: propLat,
              lng: propLong
            }}
          )
        }
      })
    }
  }


  render() {
    console.log('STATE coordinates',this.state.coordinates);
    if (!this.state.coordinates) {return null}
    else {
    return (

      <div id="map">
        <Map google={google}
             style={{width: '20%', height: '45%', position: 'relative'}}
             className={'address'}

             zoom={16}

             containerStyle={{}}
             initialCenter={this.state.coordinates}
             visible={true}>


        </Map>
      </div>
    )}
  }
};

// geocode (results, status) {
//   var latlng = new google.maps.LatLng(40.730885,-73.997383);
//   if (geocoder) {
//       geocoder.geocode({'latLng': latlng}, function(results, status) {
//           if (status == google.maps.GeocoderStatus.OK) {
//                   if (results[1]) {
//                       initContinued(results[1].formatted_address);
//                   } else {
//                       alert("No results found");
//                   }
//               } else {
//                   alert("Geocoder failed due to: " + status);
//               }
//       });
//     }
// }

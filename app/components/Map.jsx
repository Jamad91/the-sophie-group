import Map, {Marker} from 'google-maps-react';
import React, {Component} from 'react';

export default class Gmap extends Component {
  constructor(props) {
    super(props)
    this.geocodeAddress = this.geocodeAddress.bind(this)
    this.state = {}
  }

  componentDidMount() {
    this.geocodeAddress(this.props.fullAddress)
  }

  geocodeAddress(address) {
    var geo = new google.maps.Geocoder()
    geo.geocode({'address': this.props.fullAddress}, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        let propLat = results[0].geometry.location.lat()
        let propLong = results[0].geometry.location.lng()
        this.setState(
          {coordinates: {
            lat: propLat,
            lng: propLong
          }}
        )
      }
    })
    return this.state
  }


  render() {
    let coo = this.geocodeAddress(this.props.fullAddress);
    if (!this.state.coordinates) {return (<h1>Loading...</h1>)}
      return (

        <div id="map">
          <Map google={google}
             onMapLoad={this.handleMapLoad}
             style={{width: '20%', height: '45%', position: 'relative'}}
             className={'address'}
             center={this.state.coordinates}
             zoom={16}
             containerStyle={{}}
             initialCenter={this.state.coordinates}
             visible={true}>
             <Marker map={this} position={this.state.coordinates} />
          </Map>
        </div>
      )
  }
};

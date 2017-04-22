import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import Map, { GoogleApiWrapper, Marker, InfoWindow, HeatMap } from 'google-maps-react';
import { Link } from 'react-router';


class Gmap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMapClicked = this.onMapClicked.bind(this)
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this)
	}

  addInfoWindowEvents(){
    ReactDOM.findDOMNode(this).addEventListener('nv-enter', this.addToFavorites);
  }

  addToFavorites(e){
    // Google InfoWindow is meant to store stringfied html
    // which doesn't allow us to pur javascript function
    // There is hacky way to solve the issue....
    // with ReactDOM.findNode('asdff')
    // and add / remove event listener
    // this might take a while to finish

  }

	onMarkerClick (props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onInfoWindowClose() {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

	render() {
		console.log('Gmap Component rendering with props, state:', this.props, this.state)

		if(!this.props.loaded) {
			return <div>Loading...</div>
		}
    //const {breweries} = this.props
    const { activeMarker, showingInfoWindow, selectedPlace } = this.state,
          { google, location } = this.props;
    // console.log(breweries)

    const initialCenter = {
      lat: 40.705076,
      lng: -74.0113487
    }

		return (
      <div id="map-wrapper">
        <Map google={google}
             style={{width: '100%', height: '90%', position: 'relative'}}
             className={'map'}

             zoom={12}

             containerStyle={{}}
             centerAroundCurrentLocation={true}
             initialCenter={initialCenter}
             onClick={this.onMapClicked}
             visible={true}>


          <InfoWindow
            id="info-wrapper"
            marker={activeMarker}
            visible={showingInfoWindow}
            onClose={this.onInfoWindowClose}>
              {
                selectedPlace && selectedPlace.brewery
                ? <PlaceInfo selectedPlace={selectedPlace} />
                : <div>No info for you</div>
              }
          </InfoWindow>
        </Map>

    </div>
		)
	}
}



export default GoogleApiWrapper({
  apiKey: 'AIzaSyCBbGIYZPYb5rHB7A8BrdaB_GRvVOv85L0&callback=initMap',
  version: 3.25,
  libraries: ['places', 'visualizations']
})(Gmap)

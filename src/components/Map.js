import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {

    constructor(props) {
      super(props);
    }
    
   // componentWillMount() {
   //    console.log('Component WILL MOUNT!')
   // }

   // componentDidMount() {
   //    console.log('Component DID MOUNT!')
   // }

  render() {

    const mapContainer = <div style={{height: '100%', width:'100%'}}></div>

    const markers = this.props.markers.map(
        (venue, i) => {
            const marker = {
                position: {
                    lat: venue.location.lat,
                    lng: venue.location.lng
                }
            }

            // https://ss3.4sqi.net/img/categories_v2/parks_outdoors/park_,suffix.png"

      return <Marker key={i} {...marker} />
    })

    return(

        <GoogleMapLoader 
          containerElement = { mapContainer }
          googleMapElement = {
            <GoogleMap
              defaultZoom={15}
              defaultCenter={this.props.center}
              options={ {streetViewControl: false, mapTypeControl: false}}>
              { markers }
            </GoogleMap>
        }/>

    );
  }
}

export default Map;

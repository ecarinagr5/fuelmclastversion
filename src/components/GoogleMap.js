import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import location from "assets/img/location.png";

const AnyReactComponent = ({ text }) => 
<div className="marker-text">
        <span className="meaningmap">
            <img src={ location } className="icon-location"/>
        </span>
        <span className="detailmap">{text}</span>
</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
        lat: 19.432608,
        lng: -99.133209
    },
    zoom: 10
    };

    render() {    
    let { estaciones } = this.props
    return (
      // Important! Always set the container height explicitly
        <div style={{ height: '500px', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCA9e5v_Wtj6Ljr4kGQ4kA1hamL4r8zs-M' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
        {
        estaciones.map( map => {
            return (
                <AnyReactComponent
                    lat={map.latitud}
                    lng={map.longitud}
                    text={map.empresa}
                />
            )
        })
        }
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
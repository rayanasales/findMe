import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import CONSTANTS from '../util/common';
import strings from '../util/strings';
import iconFinder from "./../assets/images/icon-finder-google-small-red.png";

const MarkerComponent = ({ text }) => <img style={{ maxWidth: "25px" }} src={iconFinder} title={text} />;

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: CONSTANTS.RECIFE_CORDS_MIN.lat,
            lng: CONSTANTS.RECIFE_CORDS_MIN.lgn
        },
        zoom: strings.map_zoom
    };

    renderMarkers() {
        const { markers } = this.props;

        if (markers.length === 0) {
            return;
        }

        return (
            markers.map((m, key) =>
                <MarkerComponent
                    key={key}
                    lat={m.coordinates.lat}
                    lng={m.coordinates.lng}
                    text={m.name}
                />
            )
        );
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '84vh', width: '39%', position: 'fixed', right: '3px', top: '85px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: CONSTANTS.GOOGLE_API_PLACES_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {this.renderMarkers()}
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;
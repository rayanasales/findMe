import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import iconFinder from "./../assets/images/icon-finder-google-small-red.png";

const MarkerComponent = ({ text }) => <img style={{ maxWidth: "25px" }} src={iconFinder} title={text} />;

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: -8.05,
            lng: -34.88
        },
        zoom: 15
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
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBTo1qr8ftqlqSkLhVg_rdHpKbslJxdMas" }}
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
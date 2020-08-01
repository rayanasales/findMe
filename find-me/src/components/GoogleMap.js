import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: -8.05,
            lng: -34.88
        },
        zoom: 13
    };

    // renderMarkers() {
    //     const { markers } = this.props;

    //     if (markers.length === 0) {
    //         return;
    //     }

    //     return (
    //         markers.forEach(m => {
    //             <AnyReactComponent
    //                 lat={m.coordinates.lat}
    //                 lng={m.coordinates.lng}
    //                 text={m.name}
    //             />
    //         })
    //     );
    // }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBTo1qr8ftqlqSkLhVg_rdHpKbslJxdMas" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {/* {this.renderMarkers()} */}

                    <AnyReactComponent
                        lat={-8.060483}
                        lng={-34.88170300000001}
                        text="Clinica Ser em Terapia"
                    />
                    <AnyReactComponent
                        lat={-8.059391599999998}
                        lng={-34.8917855}
                        text="Academia Biodinâmica"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;
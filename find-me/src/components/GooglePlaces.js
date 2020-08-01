import React, { Component } from 'react';

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "AIzaSyBTo1qr8ftqlqSkLhVg_rdHpKbslJxdMas";
const URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.88068,100.43575&radius=300&type=gas_station&key=" + API_KEY;

class GooglePlaces extends Component {

    render() {
        debugger;

        let _fire = fetch(proxyUrl + URL);

        _fire.then((dataJson) => {
            return dataJson.json().then((data) => {
                debugger;
            })
        }).catch(error => {
            debugger;
        })

        return (
            <div id="map">teste Component</div>
        )
    }
}


export default GooglePlaces;
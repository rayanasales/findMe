import React, { Component } from 'react';

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "AIzaSyBTo1qr8ftqlqSkLhVg_rdHpKbslJxdMas";
const URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.88068,100.43575&radius=300&type=gas_station&key=" + API_KEY;

class GooglePlaces extends Component {

    constructor() {
        super();
        this.state = {
            nearbyPlaces: [],
            errorMessage: ""
        }
    }

    componentDidMount() {
        this.nearbySearch();
    }

    nearbySearch() {
        let nearbysearch = fetch(proxyUrl + URL);

        nearbysearch.then((dataJson) => {
            return dataJson.json().then((data) => {
                var dataFormated = this.formatData(data);
                this.setState({ nearbyPlaces: dataFormated });
            })
        }).catch(error => {
            this.setState({ errorMessage: "erro ao contatar api" });
        })
    }

    formatData(data) {
        var dataFormated = [];

        data.results.forEach(d => {
            dataFormated.push({
                name: d.name,
                icon: d.icon,
                rating: d.rating,
                types: d.types[0]
            });
        });

        return dataFormated;
    }

    render() {
        const { nearbyPlaces } = this.state;

        return (
            <div id="map">
                {
                    nearbyPlaces.map((data, key) =>
                        <div key={key}>{data.name}</div>
                    )
                }
            </div>
        )
    }
}

export default GooglePlaces;
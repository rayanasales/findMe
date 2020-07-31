import React from 'react';
import './../assets/css/GooglePlaces.css';

var map, service, infowindow;

class GooglePlaces extends React.Component {

    componentDidMount() {
        this.initMap();
    }

    initMap = () => {
        const sydney = new google.maps.LatLng(-8.054, -34.881);
        infowindow = new google.maps.InfoWindow();
        map = new google.maps.Map(document.getElementById("map"), {
            center: sydney,
            zoom: 15
        });
        const request = {
            query: "Mercearia Anchieta",
            fields: ["name", "geometry"]
        };
        service = new google.maps.places.PlacesService(map);
        service.findPlaceFromQuery(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    this.createMarker(results[i]);
                }

                map.setCenter(results[0].geometry.location);
            }
        });

        this.initialize();
    }

    initialize = () => {
        var pyrmont = new google.maps.LatLng(-8.05428, -34.8813);

        map = new google.maps.Map(document.getElementById('map'), {
            center: pyrmont,
            zoom: 15
        });

        var request = {
            location: pyrmont,
            radius: 3 * 1000, // 3km
            type: ['gas_station'] // mais tipos de lugares https://developers.google.com/places/web-service/supported_types
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, this.callback);
    }

    callback = (results, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                this.createMarker(results[i]);
            }
        }
    }

    createMarker = (place) => {
        const marker = new google.maps.Marker({
            map,
            position: place.geometry.location
        });
        google.maps.event.addListener(marker, "click", () => {
            infowindow.setContent(place.name);
            infowindow.open(map);
        });
    }

    render() {
        return (
            <div id="map"></div>
        );
    }
}

export default GooglePlaces;

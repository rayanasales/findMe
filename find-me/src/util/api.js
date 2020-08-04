import CONSTANTS from './common';
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const BASE_GOOGLE_PLACES_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";

// const reqresInBaseUrl = "https://reqres.in/api/";

function nearbySearch(lat, lng, radius, type) {

    var URL = BASE_GOOGLE_PLACES_URL +
        "?location=" + lat + "," + lng +
        "&radius=" + radius +
        "&type=" + type +
        "&key=" + CONSTANTS.GOOGLE_API_PLACES_KEY;

    return fetch(proxyUrl + URL);
}

function login(email, password) {
    // var data = {
    //     "email": email,
    //     "password": password
    // };
    // return fetch(reqresInBaseUrl + "login", {
    //     method: "post",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // });

    return {
        "token": "QpwL5tke4Pnpja7X4"
    };
}

const Api = { nearbySearch, login };
export default Api;
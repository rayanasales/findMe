import CONSTANTS from './common';
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const BASE_GOOGLE_PLACES_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";

function nearbySearch(lat, lng, radius, type) {

    var URL = BASE_GOOGLE_PLACES_URL +
        "?location=" + lat + "," + lng +
        "&radius=" + radius +
        "&type=" + type +
        "&key=" + CONSTANTS.GOOGLE_API_PLACES_KEY;

    return fetch(proxyUrl + URL);
}

const Api = { nearbySearch };
export default Api;
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "AIzaSyBTo1qr8ftqlqSkLhVg_rdHpKbslJxdMas";
const BASE_GOOGLE_PLACES_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";

function nearbySearch(lat, lng, radius, type) {
    
    var URL = BASE_GOOGLE_PLACES_URL +
        "?location=" + lat + "," + lng +
        "&radius=" + radius +
        "&type=" + type +
        "&key=" + API_KEY;

    return fetch(proxyUrl + URL);
}

const Api = { nearbySearch };
export default Api;
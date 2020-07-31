const googleAPIKey = 'AIzaSyBTo1qr8ftqlqSkLhVg_rdHpKbslJxdMas';

// Set charger station’s latitude & longitude.
const latitude = -8.05428; // recife
const longitude = -34.8813; // recife

// Search within maximum 4 km radius.
let radius = 4 * 1000;

// Places for search
var placeType = "gas_station";

var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + 
    latitude + "," + longitude + "&radius=" + radius + "&type=" + placeType + "&key=" + googleAPIKey;

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.88068,100.43575&radius=300&type=gas_station&key=AIzaSyBTo1qr8ftqlqSkLhVg_rdHpKbslJxdMas


const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "AIzaSyBTo1qr8ftqlqSkLhVg_rdHpKbslJxdMas";
const BASE_GOOGLE_PLACES_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";

function nearbySearch(lat, lng, radius, type) {

    debugger;
    var URL = BASE_GOOGLE_PLACES_URL +
        "?location=" + lat + "," + lng +
        "&radius=" + radius +
        "&type=" + type +
        "&key=" + API_KEY;

    return fetch(proxyUrl + URL);

    // nearbysearch.then((dataJson) => {
    //     debugger;
    //     return dataJson.json().then((data) => {
    //         var dataFormated = [];
    //         debugger;
    //         data.results.forEach(d => {
    //             dataFormated.push({
    //                 name: d.name,
    //                 icon: d.icon,
    //                 rating: d.rating,
    //                 types: d.types[0]
    //             });
    //         });

    //         return dataFormated;
    //     })
    // }).catch(error => {
    //     debugger;
    //     console.log(error);
    // })
}

const Api = { nearbySearch };
export default Api;
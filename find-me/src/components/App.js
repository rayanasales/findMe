import React from 'react';
import './../assets/css/App.css';
import Api from "./../util/api";
import ListPlaces from "./ListPlaces";
import GoogleMap from "./GoogleMap";

const centerMap = {
  lat: -8.05428,
  lgn: -34.8813
};
const radius = 2 * 1000; // 2km
const placeType = "gym"; // https://developers.google.com/places/web-service/supported_types

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      nearbyPlaces: []
    }
  }

  componentDidMount() {
    Api.nearbySearch(centerMap.lat, centerMap.lgn, radius, placeType).then((dataJson) => {
      return dataJson.json().then((data) => {
        this.formatData(data);
      })
    }).catch(error => {
      console.log(error);
    });
  }

  formatTypes(types) {
    var formatedTypes = "";

    types.forEach(function (t) {
      formatedTypes += "#" + t + " ";
    });

    return formatedTypes;
  }

  formatData(data) {
    var dataFormated = [];

    data.results.forEach(d => {
      dataFormated.push({
        name: d.name,
        icon: d.icon,
        rating: d.rating,
        tags: this.formatTypes(d.types),
        vicinity: d.vicinity
      });
    });

    this.setState({ nearbyPlaces: dataFormated })
  }

  render() {
    const { nearbyPlaces } = this.state;

    var content = nearbyPlaces.length === 0 ? <span>carregando...</span> : <ListPlaces places={nearbyPlaces} />;

    return (
      <div className="App">
        <div>
          {content}
          <GoogleMap markers={nearbyPlaces} />
        </div>
      </div>
    );
  }
}

export default App;

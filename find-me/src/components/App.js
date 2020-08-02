import React from 'react';
import './../assets/css/App.css';
import Api from "./../util/api";
import CONSTANTS from './../util/common';
import Strings from './../util/strings';
import ListPlaces from "./ListPlaces";
import GoogleMap from "./GoogleMap";
import MenuAppBar from "./MenuAppBar";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      nearbyPlaces: []
    }
    this.nearbySearchGoogle = this.nearbySearchGoogle.bind(this);
    this.formatTypes = this.formatTypes.bind(this);
    this.formatData = this.formatData.bind(this);
  }

  componentDidMount() {
    this.nearbySearchGoogle(Strings.place_type_default_param); // https://developers.google.com/places/web-service/supported_types
  }

  nearbySearchGoogle(placeType) {
    Api.nearbySearch(CONSTANTS.RECIFE_CORDS_LONG.lat, CONSTANTS.RECIFE_CORDS_LONG.lgn, CONSTANTS.RADIUS, placeType).then((dataJson) => {
      return dataJson.json().then((data) => {
        this.formatData(data);
      })
    }).catch(error => {
      console.log(error);
    });
  }

  formatData(data) {
    var dataFormated = [];

    data.results.forEach(d => {
      dataFormated.push({
        name: d.name,
        icon: d.icon,
        rating: d.rating,
        tags: this.formatTypes(d.types),
        vicinity: d.vicinity,
        coordinates: d.geometry.location
      });
    });

    this.setState({ nearbyPlaces: dataFormated });
  }

  formatTypes(types) {
    var formatedTypes = "";

    types.forEach(function (t) {
      formatedTypes += "#" + t + " ";
    });

    return formatedTypes;
  }

  render() {
    const { nearbyPlaces } = this.state;

    var content = nearbyPlaces.length === 0 ? <span>carregando...</span> : <ListPlaces places={nearbyPlaces} />;

    return (
      <div className="app">
        <MenuAppBar nearbySearchGoogle={this.nearbySearchGoogle} />
        <div className="content">
          {content}
          <GoogleMap markers={nearbyPlaces} />
        </div>
      </div>
    );
  }
}

export default App;

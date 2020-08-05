import React from 'react';
import './../assets/css/Style.css';
import api from "../util/api";
import CONSTANTS from '../util/common';
import strings from '../util/strings';
import Empty from '../util/empty';
import Loading from '../util/loading';
import ListPlaces from "./ListPlaces";
import GoogleMap from "./GoogleMap";
import MenuAppBar from "./MenuAppBar";
import { getSession } from "./../util/storage/auth";
import { checkIsLike } from "./../util/storage/places";

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      nearbyPlaces: []
    }
    this.nearbySearchGoogle = this.nearbySearchGoogle.bind(this);
    this.formatTypes = this.formatTypes.bind(this);
    this.formatData = this.formatData.bind(this);
  }

  componentDidMount() {
    this.nearbySearchGoogle(strings.place_type_default_param); // https://developers.google.com/places/web-service/supported_types
  }

  nearbySearchGoogle(placeType) {
    api.nearbySearch(CONSTANTS.RECIFE_CORDS_LONG.lat, CONSTANTS.RECIFE_CORDS_LONG.lgn, CONSTANTS.RADIUS, placeType).then((dataJson) => {
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
        coordinates: d.geometry.location,
        isLiked: checkIsLike(d)
      });
    });

    this.setState({ nearbyPlaces: dataFormated, isLoading: false });
  }

  formatTypes(types) {
    var formatedTypes = "";

    types.forEach(function (t) {
      formatedTypes += "#" + t + " ";
    });

    return formatedTypes;
  }

  render() {
    const { nearbyPlaces, isLoading } = this.state;

    var session = getSession();
    if (!session) {
      window.location.href = "http://" + window.location.host + "/";
      return (null);
    }

    return (
      <div className="app">
        <MenuAppBar nearbySearchGoogle={this.nearbySearchGoogle} />
        <div className="content">
          {nearbyPlaces.length === 0 ? <Empty /> : <ListPlaces places={nearbyPlaces} />}
          <GoogleMap markers={nearbyPlaces} />
        </div>
        <Loading isLoading={isLoading} />
      </div>
    );
  }
}

export default Home;

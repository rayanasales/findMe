import React from 'react';
import './../assets/css/App.css';
import Api from "./../util/api";
import ListPlaces from "./ListPlaces";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      nearbyPlaces: []
    }
  }

  componentDidMount() {
    Api.nearbySearch(-8.05428, -34.8813, 2 * 1000, "gym").then((dataJson) => {
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
        types: d.types
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
        </div>
      </div>
    );
  }
}

export default App;

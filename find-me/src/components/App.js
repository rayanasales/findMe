import React from 'react';
import './../assets/css/App.css';
import Api from "./../util/api";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      nearbyPlaces: []
    }
  }

  componentDidMount() {
    this.loadPlaces();
  }

  loadPlaces() {
    Api.nearbySearch(-8.05428, -34.8813, 2 * 1000, "gym").then((dataJson) => {
      debugger;
      return dataJson.json().then((data) => {
        var dataFormated = [];
        debugger;
        data.results.forEach(d => {
          dataFormated.push({
            name: d.name,
            icon: d.icon,
            rating: d.rating,
            types: d.types[0]
          });
        });

        this.setState({ nearbyPlaces: dataFormated })
      })
    }).catch(error => {
      debugger;
      console.log(error);
    });
    debugger;
  }

  render() {
    const { nearbyPlaces } = this.state;

    if (nearbyPlaces.length === 0) {
      return (
        <div className="App">
          <header className="App-header">
            <span>carregando...</span>
          </header>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          {
            nearbyPlaces.map((data, key) =>
              <div key={key}>{data.name}</div>
            )
          }
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './../assets/css/App.css';
import GooglePlaces from './GooglePlaces';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GooglePlaces lat={-8.05428} lng={-34.8813} radius={2 * 1000} type="gym" />
        </header>
      </div>
    );
  }
}

export default App;

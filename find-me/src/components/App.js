import React from 'react';
import './../assets/css/App.css';
import GooglePlaces from './GooglePlaces';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GooglePlaces />
        </header>
      </div>
    );
  }
}

export default App;

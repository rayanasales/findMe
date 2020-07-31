import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTo1qr8ftqlqSkLhVg_rdHpKbslJxdMas&callback=initMap&libraries=places&v=weekly"></script>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
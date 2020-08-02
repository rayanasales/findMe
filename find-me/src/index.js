import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import Routes from "./util/Routes";
import './assets/css/Index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
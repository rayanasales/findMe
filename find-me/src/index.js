import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import AppRoutes from "./util/Routes";
import './assets/css/Index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
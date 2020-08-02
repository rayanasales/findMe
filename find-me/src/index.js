import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/Index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);
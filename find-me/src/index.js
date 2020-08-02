import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/Style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" component={Home} />
      {/* <Route path="/signup" component={Signup} /> */}
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);
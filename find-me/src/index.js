import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/Style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
      <Route path="/favorites" component={Favorites} />
      <Route path="*" component={Login} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);
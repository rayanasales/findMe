import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Login';
import './assets/css/Index.css';
import { BrowserRouter as Router, Switch, Route /*, Link */ } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">App</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
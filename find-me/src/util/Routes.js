import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";

class Routes extends Component {

    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/home" component={Home} />
                </Switch>
            </Fragment>
        );
    }
}

export default Routes;
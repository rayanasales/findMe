import React, { Component } from "react";
import { getSession } from "./../util/storage/Auth";
import { findUserByEmail } from "./../util/storage/Users";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './../assets/css/Style.css';
import Strings from '../util/Strings';
import Api from '../util/Api';

import { Link } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: ""
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    onNameChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    render() {
        var userSession = JSON.parse(getSession());
        var currentLoggedUser = findUserByEmail(userSession.email);

        return (
            <div className="profile-template">
                <div className="login-container">
                    <h1 className="form-title">{Strings.update_profile}</h1>
                    <div className="text-field-login">
                        <TextField
                            required
                            id="name-required"
                            label="Name"
                            variant="outlined"
                            onChange={this.onNameChange}
                            className="text-field-login"
                            defaultValue={currentLoggedUser.name}
                        />
                    </div>
                    <div className="text-field-login">
                        <TextField
                            required
                            id="email-required"
                            label="Email"
                            variant="outlined"
                            onChange={this.onEmailChange}
                            className="text-field-login"
                            defaultValue={currentLoggedUser.email}
                        />
                    </div>
                    <div className="login-button-content">
                        <Link to="/home">
                            {Strings.back}
                        </Link>
                    </div>
                    <div className="login-button-content">
                        <Button id="login-button" variant="contained" color="primary" onClick={this.onSubmitForm}>
                            {Strings.confirm_login}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
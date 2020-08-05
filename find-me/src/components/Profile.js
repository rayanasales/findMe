import React, { Component } from "react";
import { getSession, refreshSession } from "../util/storage/auth";
import { findUserByEmail, updateUser } from "../util/storage/users";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuAppBar from "./MenuAppBar";
import './../assets/css/Style.css';
import strings from '../util/strings';
import { isValidEmail } from '../util/validator';

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
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onSubmitForm() {
        const { name, email } = this.state;

        if (!isValidEmail(email)) {
            alert(strings.user_invalid_email);
            return;
        }

        var currentEmail = JSON.parse(getSession()).email;
        var data = {
            name: name,
            email: email
        }

        var newUser = updateUser(currentEmail, data);
        refreshSession(newUser);
        alert(strings.update_success);
    }

    render() {
        var userSession = JSON.parse(getSession());
        var currentLoggedUser = findUserByEmail(userSession.email);

        return (
            <div className="profile-template">
                <MenuAppBar />
                <div className="login-container">
                    <h1 className="profile-form-title">{strings.update_profile}</h1>
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
                    <div className="profile-update-button-content">
                        <Button id="login-button" variant="contained" color="primary" onClick={this.onSubmitForm}>
                            {strings.update}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
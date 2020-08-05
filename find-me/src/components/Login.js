import React, { Component } from "react";
import { setSession } from "../util/storage/auth";
import { findUser } from "../util/storage/users";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './../assets/css/Style.css';
import strings from '../util/strings';
import api from '../util/api';

import { Link } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
        this.onEmailkeySearchPress = this.onEmailkeySearchPress.bind(this);
        this.onPasswordkeySearchPress = this.onPasswordkeySearchPress.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onEmailkeySearchPress(e) {
        this.setState({
            email: e.target.value
        });
    }

    onPasswordkeySearchPress(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmitForm() {
        const { email, password } = this.state;

        if (!email || !password) {
            alert(strings.inform_data);
        } else {
            var user = findUser(email, password);
            if (user) {
                var token = api.login(email, password).token;
                setSession(user.name, email, token);
                window.location.href = "http://" + window.location.host + "/home";
            } else {
                alert(strings.user_not_found);
            }
        }
    }

    render() {

        return (
            <div className="login-template">
                <div className="login-container">
                    <h1 className="form-title">{strings.start_login}</h1>
                    <div className="text-field-login">
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            variant="outlined"
                            onChange={this.onEmailkeySearchPress}
                            className="text-field-login"
                        />
                    </div>
                    <div className="text-field-login">
                        <TextField
                            required
                            id="outlined-password-input"
                            label="Senha"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            onChange={this.onPasswordkeySearchPress}
                            className="text-field-login"
                        />
                    </div>
                    <div className="login-button-content">
                        <Link to="/signup">
                            {strings.create_account}
                        </Link>
                    </div>
                    <div className="login-button-content">
                        <Link to="/home">
                            <Button id="login-button" variant="contained" color="primary" onClick={this.onSubmitForm}>
                                {strings.confirm_login}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
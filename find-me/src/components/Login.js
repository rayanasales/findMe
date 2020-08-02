import React, { Component } from "react";
import { setSession } from "./../util/Auth";
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
            alert(Strings.inform_data);
        } else {
            var token = Api.login(email, password).token;
            setSession(email, token);
        }
    }

    render() {
        const { errorMessage } = this.state;

        return (
            <div className="login-template">
                <div className="login-container">
                    <h1 className="form-title">{Strings.start_login}</h1>
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
                    {/* <div className="login-button-content">
                        <Link to="/signup">
                            {Strings.create_account}
                        </Link>
                    </div> */}
                    <div className="login-button-content">
                        <Link to="/home">
                            <Button id="login-button" variant="contained" color="primary" onClick={this.onSubmitForm}>
                                {Strings.confirm_login}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
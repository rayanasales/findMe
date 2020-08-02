import React, { Component } from "react";
// import { getUserData, getDefaultRoute } from "./../util/Auth";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './../assets/css/Login.css';
import Strings from '../util/Strings';
import history from '../util/History';

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
        history.push("/home");
    }

    render() {
        return (
            <div className="login-container">
                <div className="login">
                    <div className="form">
                        <form noValidate>
                            <h1 className="form-title">{Strings.start_login}</h1>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                variant="outlined"
                                onChange={this.onEmailkeySearchPress}
                                className="text-field-login"
                            />
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
                            {/* <Button id="login-button" variant="contained" color="primary" onClick={this.onSubmitForm}>
                                {Strings.confirm_login}
                            </Button> */}
                            <Link to="/home">Entrar</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
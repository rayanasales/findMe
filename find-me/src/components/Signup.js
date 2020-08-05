import React, { Component } from "react";
import { setSession } from "../util/storage/auth";
import { saveUser } from "../util/storage/users";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './../assets/css/Style.css';
import strings from '../util/strings';
import api from '../util/api';
import { isValidEmail } from '../util/validator';

class Signup extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: ""
        }
        this.onNamekeySearchPress = this.onNamekeySearchPress.bind(this);
        this.onEmailkeySearchPress = this.onEmailkeySearchPress.bind(this);
        this.onPasswordkeySearchPress = this.onPasswordkeySearchPress.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onNamekeySearchPress(e) {
        this.setState({
            name: e.target.value
        });
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
        const { name, email, password } = this.state;

        if (!name || !email || !password) {
            alert(strings.inform_data);
            return;
        }

        if (!isValidEmail(email)) {
            alert(strings.user_invalid_email);
            return;
        }

        var message = saveUser({
            name: name,
            email: email,
            password: password
        });

        if (message === strings.user_saved_success) {
            var token = api.login(email, password).token;
            setSession(name, email, token);
            window.location.href = "http://" + window.location.host + "/home";
        } else {
            alert(strings.user_salved_already);
        }
    }

    render() {
        return (
            <div className="login-template">
                <div className="signup-container">
                    <h1 className="form-title">{strings.signup_ask_data}</h1>
                    <div className="text-field-login">
                        <TextField
                            required
                            id="name-required"
                            label="Nome"
                            variant="outlined"
                            onChange={this.onNamekeySearchPress}
                            className="text-field-login"
                        />
                    </div>
                    <div className="text-field-login">
                        <TextField
                            required
                            id="email-required"
                            label="Email"
                            variant="outlined"
                            onChange={this.onEmailkeySearchPress}
                            className="text-field-login"
                        />
                    </div>
                    <div className="text-field-login">
                        <TextField
                            required
                            id="password-required"
                            label="Senha"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            onChange={this.onPasswordkeySearchPress}
                            className="text-field-login"
                        />
                    </div>
                    <div className="signup-button-content">
                        {/* <Link to="/home"> */}
                        <Button id="login-button" variant="contained" color="primary" onClick={this.onSubmitForm}>
                            {strings.confirm_login}
                        </Button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
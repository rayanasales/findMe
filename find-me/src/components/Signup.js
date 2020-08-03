import React, { Component } from "react";
import { setSession } from "./../util/storage/Auth";
import { saveUser } from "./../util/storage/Users";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './../assets/css/Style.css';
import Strings from '../util/Strings';
import Api from '../util/Api';
// import { Link } from 'react-router-dom';

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
            alert(Strings.inform_data);
            return;
        }

        var message = saveUser({
            name: name,
            email: email,
            password: password
        });

        if (message === Strings.user_saved_success) {
            var token = Api.login(email, password).token;
            setSession(email, token);
            window.location.href = "http://" + window.location.host + "/home";
        } else {
            alert(Strings.user_salved_already);
        }
    }

    render() {
        return (
            <div className="login-template">
                <div className="signup-container">
                    <h1 className="form-title">{Strings.signup_ask_data}</h1>
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
                            {Strings.confirm_login}
                        </Button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
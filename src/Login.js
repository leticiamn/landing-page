import React, { Component } from 'react';
import * as api from './services/Endpoins.js';
import AdmPage from './AdmPage.js';
class Login extends Component {

    constructor() {
        super();

        this.state = {
            currentUser: null,
            username: '',
            password: ''
        };
    }

    componentDidMount() {
        if (localStorage.getItem("jwtToken") == null) this.setState({ currentUser: true });
    }

    getUser = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    signIn = () => {
        api
            .login(this.state)
            .then((response) => {
                localStorage.setItem("jwtToken", response.data);
                if (response.status == '200') this.setState({ currentUser: true });
            })
            .catch((e) => {
                console.log("Erro: -------------------------- " + e);
            });
    }

    render() {
        return (
            <div>
                {this.state.currentUser ?
                    (
                        <AdmPage user={this.state.username} />

                    ) : (
                        <div className="form login-form">

                            <form className="form">
                                <img src="./img/logo.png" alt="Camilla Rocha" />
                                <br />
                                <input type="text" name="username" placeholder="Usuário" onChange={this.getUser} />
                                <input type="password" name="password" placeholder="Senha" onChange={this.getUser} />
                                <input type="button" onClick={this.signIn} value="Login" />
                            </form>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Login;
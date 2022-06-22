import React, { Component } from 'react';
import '../css/style.css';

class Login extends Component {
    render() {
        return (
            <form class="form">
                <input type="text" name="user" id="user" placeholder="Usuário" />
                <input type="password" name="password" id="password" placeholder="Senha"/>
            </form>
        );
    }
}

export default Login;

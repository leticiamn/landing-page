import React, { Component } from 'react';
import './css/style.css';
import './css/responsive.css';
class Header extends Component {
    render() {
        return (
            <header>
                <div class="header">
                    <div class="logo">
                        <img src="./img/logo.png" alt="Camilla Rocha" />
                    </div>
                    <div class="social">
                        <a href=""><img src="./img/icons/instagram.png" alt="Instagram" /></a>
                        <a href=""><img src="./img/icons/facebook.png" alt="Facebook" /></a>
                        <a href=""><img src="./img/icons/linkedin.png" alt="LinkedIn" /></a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
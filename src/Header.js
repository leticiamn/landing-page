import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div class="header">
                    <img src="logo.png" alt="Camilla Rocha" />
                    <div class="social">
                        <a href=""><img src="instagram.png" alt="Instagram" /></a>
                        <a href=""><img src="facebook.png" alt="Facebook" /></a>
                        <a href=""><img src="linkedin.png" alt="LinkedIn" /></a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
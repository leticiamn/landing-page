import React, { Component } from 'react';
import './css/style.css';
import './css/responsive.css';
class Header extends Component {
    color = (event) => {
        event.target.src = event.target.src.substring(0, event.target.src.length - 4) + "-color.png";
    }

    notColor = (event) => {
        event.target.src = event.target.src.substring(0, event.target.src.length - 10) + ".png";
    }

    render() {
        return (
            <header>
                <div className="header">
                    <div className="logo">
                        <img src="./img/logo.png" alt="Camilla Rocha" />
                    </div>
                    <div className="social">
                        <a href="https://www.instagram.com/camillarochapaula/" target="_blank"><img src="./img/icons/instagram.png" alt="Instagram" onMouseEnter={this.color} onMouseLeave={this.notColor} />
                        </a>
                        <a href="https://www.facebook.com/camilla.rocha.7528" target="_blank"><img src="./img/icons/facebook.png" alt="Facebook" onMouseEnter={this.color} onMouseLeave={this.notColor} />
                        </a>
                    </div>
                    <a className="wpp" href="https://contate.me/camilla.rocha"><img src="./img/whatsapp.png" alt="Whatsapp" /></a>
                </div>
            </header>
        );
    }
}

export default Header;
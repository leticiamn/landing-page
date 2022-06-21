import React, { Component } from 'react';
import './css/style.css';
import './css/responsive.css';
class Header extends Component {
    color = (event) => {
        event.target.src = event.target.src.substring(0,event.target.src.length-4) + "-color.png";
    }

    notColor = (event) => {
        event.target.src = event.target.src.substring(0,event.target.src.length-10) + ".png";
    }

    render() {
        return (
            <header>
                <div class="header">
                    <div class="logo">
                        <img src="./img/logo.png" alt="Camilla Rocha" />
                    </div>
                    <div class="social">
                        <a href="#"><img src="./img/icons/instagram.png" alt="Instagram" onMouseEnter={this.color} onMouseLeave={this.notColor}/>
                        </a>
                        <a href="#"><img src="./img/icons/facebook.png" alt="Facebook" onMouseEnter={this.color} onMouseLeave={this.notColor}/>
                        </a>
                        <a href="#"><img src="./img/icons/linkedin.png" alt="LinkedIn" onMouseEnter={this.color} onMouseLeave={this.notColor}/>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
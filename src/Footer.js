import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer">

                    <p> <img src="/../img/icons/email.png" alt="e-mail" /> camillarochapaula@gmail.com</p>
                    <p> <img src="/../img/icons/whatsapp.png" alt="WhatsApp" /> (34) 99921-2512</p>
                    <p>©2022</p>
                    <a className="wpp" href="https://contate.me/camilla.rocha"><img src="./img/whatsapp.png" alt="Whatsapp" /></a>
                </div>
            </footer>
        );
    }
}

export default Footer;
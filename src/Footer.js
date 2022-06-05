import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer">
                    <p>Camilla Rocha – Assessora de Imóveis</p>
                    <p> <img src="email-icon.png" alt="e-mail" /> camillarochapaula@gmail.com</p>
                    <p> <img src="whatsapp-icon.png" alt="WhatsApp" /> Telefone da Camilla</p>
                    <p>©2022</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
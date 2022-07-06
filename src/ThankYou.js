import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

class ThankYou extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="profile thankyou">
                    <h2>Obrigada!</h2>
                    <h3>Entraremos em contato o mais breve possível.</h3>
                    <Link to="/">Voltar</Link>
                    <footer className="footer fixed"><p>©2022</p></footer>
                </div>
            </div>
        );
    }
}

export default ThankYou;
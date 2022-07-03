import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

class ThankYou extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="profile">
                    <h2>Obrigada por se cadastrar!</h2>  
                    <Link to="/">Cadastrar novamente!</Link>
                </div>
            </div>
        );
    }
}

export default ThankYou;
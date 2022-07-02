import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

class ThankYou extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="profile">
                    <h2>Obrigada por se cadastrar!</h2>    
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ThankYou;
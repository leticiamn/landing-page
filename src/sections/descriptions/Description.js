import React, { Component } from 'react';
import Benefits from './Benefits';
import '../../css/style.css';
import {BrowserRouter as Link, Route, Router, Routes } from 'react-router-dom';
import Products from './Products';
import Details from './Details';
class Description extends Component {
    
    render() {
        return (
            <div className="description-section">
                <h2>Há diversas oportunidades na ZONA SUL</h2>
                <h3>SEJA PARA MORAR OU INVESTIR, EU POSSO TE AJUDAR!</h3>
                <Products/>
                <div className="benefits">
                    <Benefits/>
                </div>
            </div>
        );
    }
}

export default Description;
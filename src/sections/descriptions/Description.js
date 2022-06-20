import React, { Component } from 'react';
import Benefits from './Benefits';
import Product from './Product';
import products from './products';
import '../../css/style.css';
class Description extends Component {
    constructor(props) {
        super(props);
        this.state = products;
    }
    render() {
        return (
            <div class="description-section">
                <h2>Há diversas oportunidades na ZONA SUL</h2>
                <h3>SEJA PARA MORAR OU INVESTIR, EU POSSO TE AJUDAR!</h3>
                <div className="products">
                    <Product name={this.state.products[0].name} image={this.state.products[0].image} description={this.state.products[0].description} />
                    
                    <Product name={this.state.products[1].name} image={this.state.products[1].image} description={this.state.products[1].description} />
                    <Product name={this.state.products[2].name} image={this.state.products[2].image} description={this.state.products[2].description} />
                                      
                </div>  
                <div className="benefits">
                    <Benefits/>
                </div>
            </div>
        );
    }
}

export default Description;
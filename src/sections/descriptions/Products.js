import React, { Component } from 'react'
import Product from './Product'
import products from './products.json';
import details from './details.json';
import Details from './Details';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: products,
            details: details.itens[0],
            activeDetails: false
        }
    } 
        
    details = (event) => {
        if (event.target.name === 'Casas') this.setState({ details: details.itens[0] });
        else if (event.target.name === 'Apartamentos') this.setState({ details: details.itens[1] });
        else if (event.target.name === 'Terrenos') this.setState({ details: details.itens[2] });
        this.setState({ activeDetails: true });
    }

    voltar = () => {
        this.setState({ activeDetails: false });
    }
  render() {
      return (
          <div>
              {
                this.state.activeDetails === false ? (
                    <div className="products">
                        <Product name={this.state.products.products[0].name} image={this.state.products.products[0].image} description={this.state.products.products[0].description} />
                        <input name={this.state.products.products[0].name} type="button" value="VEJA MAIS" onClick={this.details} />
    
                        <Product name={this.state.products.products[1].name} image={this.state.products.products[1].image} description={this.state.products.products[1].description} />
                        <input name={this.state.products.products[1].name} type="button" value="VEJA MAIS" onClick={this.details} />
        
                        <Product name={this.state.products.products[2].name} image={this.state.products.products[2].image} description={this.state.products.products[2].description} />
                        <input name={this.state.products.products[2].name} type="button" value="VEJA MAIS" onClick={this.details} />
                    </div>
                  ) : (
                        <div>
                          <input type="button" value="Voltar" onClick={this.voltar} />
                            <Carousel infiniteLoop useKeyboardArrows showThumbs={false}>
                                {this.state.details.item.map((dt) =>
                                    <Details name={dt.name} image={dt.image} description={dt.description} />
                                )}
                            </Carousel>
                        </div>
                )}
        </div>
    )
  }
}

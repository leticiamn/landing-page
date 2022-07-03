import React, { Component } from 'react'
import Product from './Product'
import products from './products.json';
import details from './details.json';
import Details from './Details';
import '../../css/style.css';
import '../../css/responsive.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {FlashCard} from '@lrnwebcomponents/flash-card/flash-card.js';

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
                        <div>
                            <Product name={this.state.products.products[0].name} image={this.state.products.products[0].image} description={this.state.products.products[0].description} />
                            <input name={this.state.products.products[0].name} type="button" value="SAIBA MAIS" onClick={this.details} />
                        </div>
                        <div>
                            <Product name={this.state.products.products[1].name} image={this.state.products.products[1].image} description={this.state.products.products[1].description} />
                            <input name={this.state.products.products[1].name} type="button" value="SAIBA MAIS" onClick={this.details} />
                        </div>
                        <div>
                            <Product name={this.state.products.products[2].name} image={this.state.products.products[2].image} description={this.state.products.products[2].description} />
                            <input name={this.state.products.products[2].name} type="button" value="SAIBA MAIS" onClick={this.details} />
                        </div>
                    </div>
                  ) : (
                    <div>
                        <Flippy
                        flipOnHover={false} // default false
                        flipOnClick={true} // default false
                        flipDirection="horizontal" // horizontal or vertical
                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                    >
                        <FrontSide
                        style={{
                            backgroundColor: '#41669d',
                        }}
                        >
                        RICK
                        </FrontSide>
                        <BackSide
                        style={{ backgroundColor: '#175852'}}>
                        ROCKS
                        </BackSide>
                    </Flippy>
                                                
                                            </div>
                                    )}
        </div>
    )
  }
}

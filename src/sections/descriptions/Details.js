import React, { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import details from './details.json';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = details;
    }
  render() {
    return (
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div class="item-details">
            <img src={this.state.details.itens[0].image} alt="" />                
            <h2>{this.state.details.itens[0].name}</h2>
            <p>{this.state.details.itens[0].description}</p>
        </div>
            
        <div class="item-details">
            <img src={this.state.details.itens[1].image} alt="" />                
            <h2>{this.state.details.itens[1].name}</h2>
            <p>{this.state.details.itens[1].description}</p>
        </div>
            
        <div class="item-details">
            <img src={this.state.details.itens[2].image} alt="" />                
            <h2>{this.state.details.itens[2].name}</h2>
            <p>{this.state.details.itens[2].description}</p>
        </div>
    </Carousel>
    )
  }
}

import React, { Component } from 'react';
import ItemCarousel from './ItemCarousel';
import itens from './carousel-itens.json';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class CarouselSection extends Component {
    constructor(props) {
        super(props);
        this.state = itens;
    }
    render() {
        return (
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div class="item"><ItemCarousel
                    name={this.state.itens[0].name}
                    image={this.state.itens[0].image}                    
                    p1={this.state.itens[0].p1}
                    p2={this.state.itens[0].p2}
                    p3={this.state.itens[0].p3}
                    p4={this.state.itens[0].p4}
                    p5={this.state.itens[0].p5}
                /></div>

                <div class="item"><ItemCarousel
                    name={this.state.itens[1].name}
                    image={this.state.itens[1].image}                    
                    p1={this.state.itens[1].p1}
                    p2={this.state.itens[1].p2}
                    p3={this.state.itens[1].p3}
                    p4={this.state.itens[1].p4}
                    p5={this.state.itens[1].p5}
                /></div>

                <div class="item"><ItemCarousel
                    name={this.state.itens[2].name}
                    image={this.state.itens[2].image}                    
                    p1={this.state.itens[2].p1}
                    p2={this.state.itens[2].p2}
                    p3={this.state.itens[2].p3}
                    p4={this.state.itens[2].p4}
                    p5={this.state.itens[2].p5}
                /></div>
          
            </Carousel>
        );
    }
}

export default CarouselSection;
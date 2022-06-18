import React, { Component } from 'react';


class ItemCarousel extends Component {
    render() {
        return (
            <div class="item-carousel">
                <img src={this.props.image} alt="" />
                <h2>{this.props.name}</h2>
                <p>{this.props.p1}</p>
                <p>{this.props.p2}</p>
                <p>{this.props.p3}</p>
                <p>{this.props.p4}</p>
                <p>{this.props.p5}</p>
                <input type="button" value="VEJA MAIS" />
            </div>
        );
    }
    componentDidMount() {
        
    }
}

export default ItemCarousel;
import React, { Component } from 'react';   
import Products from './Products';

export default class Details extends Component {

  render() {
    return (
      <div class="item-carousel">
        <img src={this.props.image} alt="" />
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
      </div>
    )  
  }

}

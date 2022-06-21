import React, { Component } from 'react';   

export default class Details extends Component {
    
  render() {
    return (
        
        <div class="item-details">
            <img src={this.props.image} alt="" />                
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
        </div>
        
        
      )
      /**<div class="item-details">
            <img src={this.state.details.itens[1].image} alt="" />                
            <h2>{this.state.details.itens[1].name}</h2>
            <p>{this.state.details.itens[1].description}</p>
        </div>
            
        <div class="item-details">
            <img src={this.state.details.itens[2].image} alt="" />                
            <h2>{this.state.details.itens[2].name}</h2>
            <p>{this.state.details.itens[2].description}</p>
        </div> */
  }
}

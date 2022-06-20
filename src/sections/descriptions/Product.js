import React, { Component } from 'react';
import '../../css/style.css';

export default class Product extends Component {
  
  details(event) { }
  
  render() {
    return (
        <div>
            <h4>{this.props.name}</h4>
            <img src={this.props.image} alt="" />
            <p>{this.props.description}</p>
            <input type="button" value="VEJA MAIS" onClick={this.details}/>
        </div>
    )
  }
}

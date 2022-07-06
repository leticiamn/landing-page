import React, { Component } from 'react';
import '../../css/style.css';
export default class Product extends Component {

  render() {

    return (
      <div>
        <h4>{this.props.name}</h4>
        <img src={this.props.image} alt="" />
        <p>{this.props.description}</p>
      </div>
    )
  }
}

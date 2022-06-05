import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
        <div>
            <h4>{this.props.name}</h4>
            <img src={this.props.image} alt="" />
            <p>{this.props.description}</p>
            <input type="button" value="VEJA MAIS" />
        </div>
    )
  }
}

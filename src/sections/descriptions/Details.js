import React, { Component } from 'react';   
import '../../css/style.css';
import '../../css/responsive.css';
export default class Details extends Component {

  render() {
    return (
      <div className="item-carousel">
        <img src={this.props.image} alt="" />
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    )  
  }

}

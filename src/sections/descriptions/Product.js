import React, { Component } from 'react';
import '../../css/style.css';
import Details from './Details.js'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import details from './details.json';
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  details = (event) => {
    console.log(event.target.name);
    if (event.target.name === 'Casas') this.setState(details.itens[0]);
    else if (event.target.name === 'Apartamentos') this.setState({ array: details.itens[1] });
    else if (event.target.name === 'Terrenos') this.setState({array:details.itens[2]});
   }
  
  render() {
    return (
        <div>
          <h4>{this.props.name}</h4>
          <img src={this.props.image} alt="" />
          <p>{this.props.description}</p>
          <input name={this.props.name} type="button" value="VEJA MAIS" onClick={this.details}/>
      
        

      </div>
      /**<Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
          {this.state.map((item) => {
            <Details image={item.image} name={item.name} description={item.description} />
          })}
        </Carousel> */
    )
  }
}

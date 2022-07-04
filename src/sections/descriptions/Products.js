import React, { Component } from "react";
import Product from "./Product";
import products from "./products.json";
import "../../css/style.css";
import "../../css/responsive.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FlipCard from "./FlipCard";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      activeDetails: false,
      card: [
        {
          id: "2",
          variant: "click",
          front: "Click",
          back: "Back",
        },
      ],
    };
  }

  render() {
    return (
      <div className="products">
        {this.state.card.map((card) => (
          <FlipCard
            key={card.id}
            card={card}
            front={
              <div>
                <Product
                  name={this.state.products.products[0].name}
                  image={this.state.products.products[0].image}
                  description={this.state.products.products[0].description}
                />
                <input
                  name={this.state.products.products[0].name}
                  type="button"
                  value="SAIBA MAIS"
                />
              </div>
            }
            back={
              <div>
                {this.state.products.products[0].details}{" "}
                <input name="voltar" type="button" value="VOLTAR" />
              </div>
            }
          />
        ))}

        {this.state.card.map((card) => (
          <FlipCard
            key={card.id}
            card={card}
            front={
              <div>
                <Product
                  name={this.state.products.products[1].name}
                  image={this.state.products.products[1].image}
                  description={this.state.products.products[1].description}
                />
                <input
                  name={this.state.products.products[1].name}
                  type="button"
                  value="SAIBA MAIS"
                />
              </div>
            }
            back={
              <div>
                {this.state.products.products[1].details}{" "}
                <input name="voltar" type="button" value="VOLTAR" />
              </div>
            }
          />
        ))}
        {this.state.card.map((card) => (
          <FlipCard
            key={card.id}
            card={card}
            front={
              <div>
                <Product
                  name={this.state.products.products[2].name}
                  image={this.state.products.products[2].image}
                  description={this.state.products.products[2].description}
                />
                <input
                  name={this.state.products.products[2].name}
                  type="button"
                  value="SAIBA MAIS"
                />
              </div>
            }
            back={
              <div>
                {this.state.products.products[2].details}{" "}
                <input name="voltar" type="button" value="VOLTAR" />
              </div>
            }
          />
        ))}
      </div>
    );
  }
}

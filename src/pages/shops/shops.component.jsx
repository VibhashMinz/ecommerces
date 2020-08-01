import React, { Component } from "react";
import CLOTHES_DATA from "./shops.component.jsx";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: CLOTHES_DATA,
    };
  }
  render() {
    return <div> SHOP PAGE</div>;
  }
}

export default ShopPage;

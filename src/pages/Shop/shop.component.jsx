import React, { Component } from "react";
import { SHOP_DATA } from "./../../assets/data";
import { CollectionPreview } from "./../../components/preview-collection/preview-collection.component";

class ShopPage extends Component {
  constructor(props) {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollection }) => (
          <CollectionPreview key={id} {...otherCollection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

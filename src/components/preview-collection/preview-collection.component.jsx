import React from "react";
import "./preview-collection.style.scss";
import { CollectionItem } from "./../collection-item/collection-item.component";

export const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

export const MenuItem = withRouter(
  ({ title, imageUrl, size, history, match, linkUrl }) => {
    return (
      <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">Show now</span>
        </div>
      </div>
    );
  }
);

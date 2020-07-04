import React, { Component } from "react";
import { MenuItem } from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { DIRECTORY_DATA } from "./../../assets/data";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: DIRECTORY_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

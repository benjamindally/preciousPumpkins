import React, { Component } from "react";
import "./spacecard.css";

class SpaceCard extends Component {
  render() {
    return (
      <div>
        <div className="basic_space_area text-center">
          <div className="space_header text-center">
            <h2 className="text-center float_left">{this.props.name}</h2>
          </div>
          <div className="space_picture_wrapper">
            <img
              alt={this.props.image}
              className="space_picture"
              src={this.props.image}
            />
          </div>
          <div className="space_paragraph">
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SpaceCard;

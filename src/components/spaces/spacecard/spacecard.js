import React, { Component } from "react";
import "./spacecard.css";
import spaceInformation from "./spacecard.json";

class SpaceCard extends Component {
  render() {
    return (
      <div>
        <div className="basic_space_area">
          <div className="space_header float_left">
            <h2 className="text-left float_left">Playroom</h2>
          </div>
          <div className="space_picture_wrapper">
            <img
              alt={spaceInformation[0].name}
              className="space_picture"
              src={spaceInformation[0].image}
            />
          </div>
          <div className="space_paragraph">
            <p>
              The Playroom is one of the main centers of activity at Precious
              Pumpkins. In the mornings, one of our excellent staff hosts
              "Circle Time" where the children are exposed to new letters,
              songs, and other eduational games. During naptime, the children
              set their beds here for an afternoon nap. Anytime of the day,
              children can be found singing, dancing, learning, or playing here.
              It's really a mult-purpose space!
            </p>
          </div>
        </div>
        <div className="basic_space_area">
          <div className="space_header float_left">
            <h2 className="text-left float_left">Playroom</h2>
          </div>
          <div className="space_picture_wrapper">
            <img
              alt={spaceInformation[0].name}
              className="space_picture"
              src={require("../../../img/playroom.jpg")}
            />
          </div>
          <div className="space_paragraph">
            <p>
              The Playroom is one of the main centers of activity at Precious
              Pumpkins. In the mornings, one of our excellent staff hosts
              "Circle Time" where the children are exposed to new letters,
              songs, and other eduational games. During naptime, the children
              set their beds here for an afternoon nap. Anytime of the day,
              children can be found singing, dancing, learning, or playing here.
              It's really a mult-purpose space!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SpaceCard;

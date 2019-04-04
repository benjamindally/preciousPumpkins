import React, { Component } from "react";
import SpaceCard from "./spacecard/spacecard";
import "./spaces.css";
import spaceInformation from "./spacecard/spacecard.json";
import img from "./images/playroom.jpg";
class Spaces extends Component {
  state = {
    spaceInformation,
    img: img,
  };

  render() {
    return (
      <div>
        {this.state.spaceInformation.map(spaceInformation => (
          <SpaceCard
            id={spaceInformation.id}
            key={spaceInformation.id}
            name={spaceInformation.name}
            image={spaceInformation.image}
            description={spaceInformation.description}
          />
        ))}
      </div>
    );
  }
}

export default Spaces;

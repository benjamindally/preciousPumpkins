import React, { Component } from "react";
import SpaceCard from "../spaces/spacecard/spacecard";
import activitiesInformation from "./activitiesInformation.json";

export default class Activities extends Component {
  state = {
    activitiesInformation,
  };

  render() {
    return (
      <div>
        <div>
          {this.state.activitiesInformation.map(activitiesInformation => (
            <SpaceCard
              id={activitiesInformation.id}
              key={activitiesInformation.id}
              name={activitiesInformation.name}
              image={activitiesInformation.image}
              description={activitiesInformation.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

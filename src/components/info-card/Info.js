import React, { Component } from "react";

export default class Info extends Component {
  render() {
    return (
      <div className="information_image_wrapper basic_text_area padding20px">
        <img
          className="information_image"
          src={require("../../img/info.jpg")}
          alt="Learn more about Precious Pumpkins"
        />
      </div>
    );
  }
}

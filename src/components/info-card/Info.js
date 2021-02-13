import React, { Component } from "react";
import info from "../../img/info.jpg"

export default class Info extends Component {
  render() {
    return (
      <div className="information_image_wrapper basic_text_area padding20px">
        <img
          className="information_image"
          src={info}
          alt="Learn more about Precious Pumpkins"
        />
      </div>
    );
  }
}

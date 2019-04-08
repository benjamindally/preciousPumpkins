import React, { Component } from "react";

export default class EditTxt extends Component {
  state = {
    bodyText: "",
  };

  handleChange = event => {
    const stateName = event.target.name;
    this.setState({
      [stateName]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <textarea
          className="edit_text_area"
          name="bodyText"
          onChange="handleChange"
        >
          {this.props.bodyText}
        </textarea>
        <button id={this.props.id} className="button">
          Done Editing
        </button>
      </div>
    );
  }
}

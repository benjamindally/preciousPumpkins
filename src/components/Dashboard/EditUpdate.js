import React, { Component } from "react";

export default class EditTxt extends Component {
  state = {
    bodyText: this.props.bodyText,
  };

  handleChange = event => {
    const stateName = event.target.name;
    this.setState({
      [stateName]: event.target.value,
    });
  };

  doneEditing = event => {
    event.preventDefault();
    let newBodyText = this.state.bodyText;
    let id = this.props.id;
    this.props.doneEditing(id, newBodyText);
  };

  render() {
    return (
      <div>
        <textarea
          value={this.state.bodyText}
          className="edit_text_area"
          name="bodyText"
          onChange={this.handleChange}
        />
        <button
          id={this.props.id}
          className="button"
          onClick={this.doneEditing}
        >
          Done Editing
        </button>
      </div>
    );
  }
}

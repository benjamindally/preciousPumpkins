import React, { Component } from "react";

export default class NewPost extends Component {
  state = {
    title: "",
    bodyText: "",
    image: "",
    sticky: false,
  };

  handleChange = event => {
    const stateName = event.target.name;
    this.setState({
      [stateName]: event.target.value,
    });
  };

  postNewUpdate = () => {
    const newUpdateInformation = {
      title: this.state.title,
      bodyText: this.state.bodyText,
    };
    this.props.postNewUpdate(newUpdateInformation);
  };

  render() {
    return (
      <div className="basic_text_area new_post text-center">
        <h1>New Post</h1>

        <label className="form--lable">
          Title:
          <br />
          <input
            className="form--lable__input"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </label>
        <br />
        <label className="form--lable">
          Update:
          <br />
          <textarea
            className="form--lable__textarea"
            name="bodyText"
            onChange={this.handleChange}
            value={this.bodyText}
          />
        </label>
        <button className="button" onClick={this.postNewUpdate}>
          Post New Update
        </button>

        <p>&nbsp;</p>
      </div>
    );
  }
}

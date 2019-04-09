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

  render() {
    return (
      <div className="basic_text_area new_post">
        <h1>New Post</h1>
        <form className="form--lable" onSubmit={this.postNewUpdate}>
          <label>
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
          <label>
            Update:
            <br />
            <textarea
              className="form--lable__textarea"
              name="bodyText"
              onChange={this.handleChange}
              value={this.bodyText}
            />
          </label>
        </form>
      </div>
    );
  }
}

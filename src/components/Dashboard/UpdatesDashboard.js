import React, { Component } from "react";
import EditTxt from "./EditUpdate";
import "./dashboard.css";

class Owner extends Component {
  state = {
    editThetext: false,
  };
  getId = () => {
    let id = this.props.id;
    this.props.deleteUpdate(id);
  };

  toggleSticky = () => {
    let id = this.props.id;

    this.props.toggleSticky(id);
  };

  removeSticky = () => {
    let id = this.props.id;
    this.props.removeSticky(id);
  };

  editText = () => {
    this.setState({ editThetext: true });
  };

  doneEditing = (id, newBodyText) => {
    const editText = {
      id: id,
      newBodyText: newBodyText,
    };
    this.props.doneEditing(editText);
  };
  render() {
    const stickyUpdate = this.props.sticky;

    return (
      <div>
        <div className="basic_text_area padding20px dashboard_sidebar">
          <h1>{this.props.title}</h1>
          {this.state.editThetext ? (
            <EditTxt
              id={this.props.id}
              bodyText={this.props.bodyText}
              doneEditing={this.doneEditing}
            />
          ) : (
            <div>
              <p id="update_body_text">{this.props.bodyText}</p>
              <button
                id={this.props.id}
                className="button"
                onClick={this.editText}
              >
                Edit Text
              </button>
            </div>
          )}
          <div>
            {stickyUpdate ? (
              <button onClick={this.removeSticky} className="button">
                Unpin From Top
              </button>
            ) : (
              <button onClick={this.toggleSticky} className="button">
                Pin to Top
              </button>
            )}
          </div>
          <button id={this.props.id} className="button" onClick={this.getId}>
            Delete Update
          </button>
        </div>
      </div>
    );
  }
}

export default Owner;

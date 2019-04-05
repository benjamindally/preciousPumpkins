import React, { Component } from "react";
import Updates from "../updates/Updates";
import updatesAPI from "../../utils/updatesAPI";

import "./dashboard.css";

class Owner extends Component {
  deleteUpdate = () => {
    let id = this.props._id;
    this.props.deleteUpdate(id);
  };

  render() {
    const stickyUpdate = this.props.sticky;

    return (
      <div>
        <div className="basic_text_area padding20px">
          <h1>{this.props.title}</h1>
          <p>{this.props.bodyText}</p>
          <div>
            {stickyUpdate ? (
              <button onClick={this.props.toggleSticky} className="button">
                Unpin From Top
              </button>
            ) : (
              <button onClick={this.props.toggleSticky} className="button">
                Pin to Top
              </button>
            )}
          </div>
          <button className="button" onClick={this.deleteUpdate}>
            Delete Update
          </button>
        </div>
      </div>
    );
  }
}

export default Owner;

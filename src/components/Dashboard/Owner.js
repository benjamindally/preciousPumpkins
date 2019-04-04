import React, { Component } from "react";
import Updates from "../updates/Updates";
import updatesAPI from "../../utils/updatesAPI";

import "./dashboard.css";

class Owner extends Component {
  state = {
    updatesArray: [],
  };

  componentDidMount() {
    this.readUpdates();
  }

  readUpdates = () => {
    updatesAPI
      .readUpdates()
      .then(response => {
        this.setState({ updatesArray: response.data });
      })

      .catch(err => console.log(err));
  };
  render() {
    const sticky = this.state.updatesArray.sticky;
    let stickyButton;

    if (sticky) {
      stickyButton = (
        <button onClick="toggleSticky" className="button text-center">
          Unpin From Top
        </button>
      );
    } else {
      stickyButton = (
        <button onClick="toggleSticky" className="button text-center">
          Pin to Top
        </button>
      );
    }
    return (
      <div className="updates_sidebar">
        <h1 className="floating_header text-center">All Updates</h1>
        {this.state.updatesArray.map(update => (
          <div className="basic_text_area padding20px">
            <h1>{update.title}</h1>
            <p className="basic_paragraph text-center">{update.bodyText}</p>
            <button
              id={update._id}
              className="button text-center"
              onClick={() => this.deleteUpdate}
            >
              Delete Update
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Owner;

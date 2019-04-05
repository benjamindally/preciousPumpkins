import React, { Component } from "react";
import updatesAPI from "../../utils/updatesAPI";
import Owner from "./Owner";
import "./dashboard.css";

class Dashboard extends Component {
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

  deleteUpdate = id => {
    alert(`Are you sure you want to delete this update?`);
    updatesAPI.deleteUpdate(id).then(response => console.log("deleted"));
  };

  render() {
    return (
      <div className="updates_sidebar">
        <h1 className="floating_header text-center">All Updates</h1>

        {this.state.updatesArray.map(updates => (
          <Owner
            id={updates._id}
            title={updates.title}
            sticky={updates.sticky}
            bodyText={updates.bodyText}
            toggleSticky={this.toggleSticky}
            deleteUpdate={this.deleteUpdate}
          />
        ))}
      </div>
    );
  }
}

export default Dashboard;

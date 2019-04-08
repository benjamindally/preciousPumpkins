import React, { Component } from "react";
import updatesAPI from "../../utils/updatesAPI";
import Owner from "./UpdatesDashboard";
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
    if (window.confirm(`Are you sure you want to delete this update?`)) {
      updatesAPI.deleteUpdate(id).then(response => console.log("deleted"));
      window.location.reload();
    } else {
      console.log(`cancelled`);
    }
  };

  toggleSticky = id => {
    updatesAPI.toggleSticky(id).then(response => {
      window.location.reload();
    });
  };

  removeSticky = id => {
    updatesAPI.removeSticky(id).then(response => {
      window.location.reload();
    });
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
            removeSticky={this.removeSticky}
            deleteUpdate={this.deleteUpdate}
            key={updates._id}
          />
        ))}
      </div>
    );
  }
}

export default Dashboard;

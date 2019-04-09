import React, { Component } from "react";
import updatesAPI from "../../utils/updatesAPI";
import Updates from "./UpdatesDashboard";
import NewPost from "./NewPost";
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

  doneEditing = editBodyText => {
    const newBodyText = { bodyText: editBodyText.newBodyText };

    updatesAPI.newBodyText(editBodyText.id, newBodyText).then(response => {
      window.location.reload();
      console.log(response);
    });
  };

  postNewUpdate = newUpdateInformation => {
    updatesAPI.createUpdate(newUpdateInformation).then(response => {
      window.location.reload();
    });
  };

  render() {
    return (
      <div>
        <NewPost postNewUpdate={this.postNewUpdate} />
        <div className="updates_sidebar">
          <h1 className="floating_header text-center">All Updates</h1>

          {this.state.updatesArray.map(updates => (
            <Updates
              id={updates._id}
              title={updates.title}
              sticky={updates.sticky}
              bodyText={updates.bodyText}
              toggleSticky={this.toggleSticky}
              removeSticky={this.removeSticky}
              deleteUpdate={this.deleteUpdate}
              doneEditing={this.doneEditing}
              key={updates._id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;

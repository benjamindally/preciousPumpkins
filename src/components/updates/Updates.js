import React, { Component } from "react";
import updatesAPI from "../../utils/updatesAPI";

class Updates extends Component {
  state = {
    updatesArray: [],
    sortedArray: [],
    slicedArray: [],
  };

  componentDidMount() {
    this.readUpdates();
  }

  readUpdates = () => {
    updatesAPI
      .readUpdates()
      .then(response => {
        const updatesArray = response.data;
        const sortedArray = updatesArray.sort((a, b) => (a.sticky ? -1 : 1));
        const slicedArray = sortedArray.slice(0, 11);
        this.setState({ slicedArray: slicedArray });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.slicedArray.map(update => (
          <div className="basic_text_area padding20px">
            <h1 className="text-center" key={update._id}>
              {update.title}
            </h1>
            <p className="basic_paragraph text-center" key={update.date}>
              {update.bodyText}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Updates;

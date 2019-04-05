import React, { Component } from "react";
import "./contact.css";
import Map from "./Map";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="basic_text_area padding20px">
          <h1 className="text-center">Contact Us</h1>
          <div>
            <Map />
          </div>
          <p className="basic_paragraph text-center">
            Give us a call anytime to set up a tour. We'd be happy to show you
            around and introduce you to our wonderful Precious Pumpkins.
          </p>
          <p className="basic_paragraph text-center">(530) 979-0576</p>
          <p className="basic_paragraph text-center">
            708 Lopes Ct. Woodland, CA 95695
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;

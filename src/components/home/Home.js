import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home_page_main_wrapper">
          <div className="call_to_action">
            <p className="call_to_action_words">Join Our Family</p>
          </div>
        </div>
        <div>
          <div className="basic_text_area">
            <h1>
              Welcome! We are so happy that you are thinking of us for your
              childcare needs.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

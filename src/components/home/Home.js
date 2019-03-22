import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home_page_main_wrapper">
          <div className="call_to_action">
            <div className="call_to_action_words">Join Our Family</div>
          </div>
        </div>
        <div>
          <div className="basic_text_area">
            <h1 className="padding3015percent">Welcome!</h1>
            <div className="butterfly_wrapper">
              <p className="text-center inline">
                <img
                  className="butterfly large_icon"
                  src={require("../../img/butterfly3.svg")}
                  alt="Precious Pumpkins Butterfly"
                />
                We are so happy that you are thinking of us for your childcare
                needs. Everyone who walks through the door is a precious
                pumpkin. Here you will find the activities, programs, and
                support for your own little precious pumpkin.{" "}
                <a className="links" href="/contact">
                  Contact us
                </a>{" "}
                today to set up a tour.
              </p>
            </div>
          </div>
        </div>
        <div className="quote">
          <p className="text-center">
            <blockquote>
              All three of my kids go to Kathy and they absolutely love her and
              the staff that work with her. It is truly a home-like environment
              and each child feels equally loved by everyone. <br />
              <br />- Hilary Padilla
            </blockquote>
          </p>
        </div>
        <div className="facebook_wrapper">
          <a href="https://www.facebook.com/preciouspumpkinschildcare/">
            <h1>See the Latest from our Facebook Page</h1>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;

import React from "react";
import "./nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <nav className="main_nav">
      <img
        className="pumpkin small_icon"
        src={require("../../img/pumpkin.svg")}
        alt="Pumpking Logo"
      />
      Still testing
    </nav>
    {/* <a className="navbar-brand" href="/">
      Start a new Search
    </a>
    <a className="navbar-brand" href="/saved">
      View Saved Articles
    </a> */}
  </nav>
);

export default Nav;

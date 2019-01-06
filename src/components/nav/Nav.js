import React from "react";
import "./nav.css";

const Nav = () => (
  <nav className="main_nav">
    <a href="#">
      <img
        className="pumpkin small_icon"
        src={require("../../img/pumpkin.svg")}
        alt="Pumpking Logo"
      />
    </a>
    <a href="#" className="top-nav-words">
      Precious Pumpkins Childcare
    </a>
  </nav>
);

export default Nav;

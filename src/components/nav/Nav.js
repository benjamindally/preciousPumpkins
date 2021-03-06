import React, { Component } from "react";
import "./nav.css";
import pumpkin from "../../img/pumpkin.svg"

const screenSize = window.matchMedia(`(max-width: 760px)`);

class Nav extends Component {
  state = {
    menuOpen: false,
  };
  responsiveNav = event => {
    let menuTrigger = document.getElementById("responsive_menu_id");
    let navWrapper = document.getElementById("main_nav_wrapper_id");

    if (this.state.menuOpen === true) {
      menuTrigger.className = "responsive_menu";
      navWrapper.className = "main_nav_wrapper";
      this.setState({ menuOpen: false });
    } else if (!screenSize.matches) {
      window.location.href = "/";
    } else {
      this.setState({ menuOpen: true });
      menuTrigger.className += " show_responsive_menu";
      navWrapper.className += " hide_icon_and_name";
    }
  };
  render() {
    return (
      <nav className="main_nav">
        <div className="main_nav_wrapper" id="main_nav_wrapper_id">
          {" "}
          <div>
            <img
              className="pumpkin small_icon"
              src={pumpkin}
              alt="Pumpkin Logo"
              onClick={this.responsiveNav}
            />
          </div>
          <p className="top-nav-words" onClick={this.responsiveNav}>
            Precious Pumpkins Childcare
          </p>
        </div>
        <div className="responsive_menu" id="responsive_menu_id">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/spaces">Spaces</a>
            </li>
            <li>
              <a href="/activities">Activities</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;

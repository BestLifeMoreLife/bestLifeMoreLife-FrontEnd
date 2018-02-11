import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = props => {
  const loggedIn = false;
  return (
    <nav role="navigation">
      <h2 className="header">Best Life, More Life</h2>

      <div id="menuToggle">
        <input type="checkbox" />

        <span />
        <span />
        <span />
        <ul id="menu">
          <div id="list-container">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="https://erikterwan.com/" target="_blank">
              <li>Show me more</li>
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);

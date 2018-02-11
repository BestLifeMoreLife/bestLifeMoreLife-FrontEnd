import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const Navbar = props => {
  const loggedIn = !!props.user.name;
  const tookQuiz = !!props.user.track;
  let quizItem;
  if (loggedIn && tookQuiz) {
    quizItem = (
      <Link to="/journal">
        <li>Your Journal</li>
      </Link>
    );
  } else if (loggedIn && !tookQuiz) {
    quizItem = (
      <a>
        <li>Get Started</li>
      </a>
    );
  } else {
    quizItem = null;
  }
  let homeLink;
  if (loggedIn && tookQuiz) {
    homeLink = (
      <Link to="/home">
        <li>Home</li>
      </Link>
    );
  } else if (loggedIn && !tookQuiz) {
    homeLink = (
      <Link to="/home">
        <li>Home</li>
      </Link>
    );
  } else {
    homeLink = null;
  }
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />

        <span />
        <span />
        <span />
        <ul id="menu">
          <div id="list-container">
            <a href="http://localhost:3000/api/v1/login">
              {loggedIn ? <li>Log Out</li> : <li>Login</li>}
            </a>
            {quizItem}
            {homeLink}
            <Link to="/journal">
              <li>About</li>
            </Link>
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

const mapStateToProps = state => {
  return { user: state.currentUser };
};

export default connect(mapStateToProps)(withRouter(Navbar));

import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = props => {
  const loggedIn = false;
  return (
    <div>
      <ul>
        <li>
          <h3 className="logo" href="#home">
            Best Life, More Life
          </h3>
        </li>
        <li>
          <a className="login" href="http://localhost:3000/api/v1/login">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Navbar);

{
  /*<a href="http://localhost:3000/api/v1/login">
  <div className="segment">
  <div className="ui secondary pointing menu">
    <h2>
      <div className="content">Best Life More Life</div>
    </h2>
    <h2>Testing</h2>
    <h2>Testing</h2>
  </div>
  {loggedIn ? (
    <div className="item">Welcome </div>
  ) : (
    <Link to="/login" className="item">
      <h2 className="ui header">
        <div className="content">Login</div>
      </h2>
    </Link>
  )}
  {loggedIn ? (
    <div>
      <div
        onClick={() => {
          this.props.handleLogout();
          this.props.history.push("/login");
        }}
      >
        Log Out
      </div>
    </div>
  ) : null}
</div>*/
}

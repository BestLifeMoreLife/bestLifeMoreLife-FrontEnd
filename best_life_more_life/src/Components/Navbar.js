import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = props => {
  const loggedIn = false;
  return (
    <div>
      <h2 className="ui header">
        <div className="content">Best Life More Life</div>
      </h2>

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
    </div>
  );
};

export default withRouter(Navbar);

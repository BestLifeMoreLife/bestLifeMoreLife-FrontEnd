import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
const em = "http://wallpapersdsc.net/wp-content/uploads/2015/11/10120.jpg";

const Navbar = props => {
  console.log("nav", props.user.track);
  return (
    <div>
      {props.user.track ? (
        <div>
          <div className="ui inverted segment">
            <div className="ui inverted pointing secondary menu">
              <Link to="/about">
                <a className="item logo">Best Life, More Life</a>
              </Link>
              <div className="dropdown">
                <span className="navbar-words">Options</span>
                <div className="dropdown-content">
                  <Link to="/journal">
                    <p className="navbar-words">Journal</p>
                  </Link>
                  <Link to="/journal">
                    <p className="navbar-words">About</p>
                  </Link>
                  <Link to="/journal">
                    <p className="navbar-words">Logout</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="ui inverted segment">
            <div className="ui inverted pointing secondary menu">
              <Link to="/about">
                <a className="item logo">Best Life, More Life</a>
              </Link>
              <a href="http://localhost:3000/api/v1/login">
                <a className="item navbar-words">Login/Sign Up</a>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.currentUser };
};
{
  /*<div>
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
</div>*/
}
export default connect(mapStateToProps)(withRouter(Navbar));

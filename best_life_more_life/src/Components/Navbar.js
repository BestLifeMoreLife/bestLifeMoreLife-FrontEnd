import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = props => {
  console.log("test", props.user);
  return (
    <div>
      <ul>
        <li>
          <h3 className="logo" href="#home">
            Best Life, More Life
          </h3>
        </li>
        {props.user.track ? (
          <li>
            <a className="login">Log Out</a>
          </li>
        ) : (
          <li>
            <a className="login" href="http://localhost:3000/api/v1/login">
              Login
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

const sideBar = () => {
  return (
    <div>
      <button class="ui button" role="button">
        Toggle Visibility
      </button>
      <div class="ui segment pushable">
        <div class="ui inverted vertical labeled icon ui overlay left thin sidebar menu">
          <div class="item">
            <i aria-hidden="true" class="home icon" />Home
          </div>
          <div class="item">
            <i aria-hidden="true" class="gamepad icon" />Games
          </div>
          <div class="item">
            <i aria-hidden="true" class="camera icon" />Channels
          </div>
        </div>
        <div class="pusher">
          <div class="ui basic segment">
            <h3 class="ui header">Application Content</h3>
            <img
              src="/assets/images/wireframe/paragraph.png"
              class="ui image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.currentUser };
};

export default connect(mapStateToProps)(withRouter(Navbar));

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

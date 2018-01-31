import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import api from "../services/api";

const button = () => {
  return (
    <a href="http://localhost:3000/api/v1/login">
      <button as="a">Log In</button>
    </a>
  );
};

class App extends Component {
  state = {
    auth: { currentUser: {} },
    newUser: {
      username: "",
      email: "",
      password: ""
    }
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then(user => {
        if (!user.error) {
          this.setState({
            auth: { currentUser: user }
          });
        } else {
          console.log("no current user");
        }
      });
    }
  }

  handleLogin = user => {
    console.log("in login");
    localStorage.setItem("token", user.token);
    this.setState({ auth: { currentUser: user } });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };

  render() {
    console.log(this.state.auth.currentUser);
    return (
      <div className="App">
        <Navbar
          currentUser={this.state.auth.currentUser}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route path="/login" component={button} />
          <Route
            path="/"
            exact
            render={routerProps => {
              return <Welcome />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

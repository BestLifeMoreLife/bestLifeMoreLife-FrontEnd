import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import UserAuth from "./UserAuth";

const button = () => {
  return (
    <a href="http://localhost:3000/api/v1/login">
      <button as="a">Log In</button>
    </a>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={button} />
          <Route path="/auth" component={UserAuth} />
        </Switch>
      </div>
    );
  }
}

export default App;

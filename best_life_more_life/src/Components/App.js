import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import WelcomePage from "./WelcomePage";
import SignUpQuizContainer from "./SignUpQuizContainer";
import LoginPage from "./LoginPage";
import UserAuth from "./UserAuth";

const button = () => {
  return (
    <a href="http://localhost:3000/api/v1/login">
      <button>Log In</button>
    </a>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/auth" component={UserAuth} />
          <Route path="/profile" component={WelcomePage} />
          <Route path="/quiz" component={SignUpQuizContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import WelcomePage from "./WelcomePage";
import SignUpQuizContainer from "./SignUpQuizContainer";
import EntryQuizContainer from "./EntryQuizContainer";
import Home from "./Home";
import UserAuth from "./UserAuth";
import IntroPage from "./IntroPage";
import Journal from "./Journal";
import NewEntry from "./NewEntry";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/auth" component={UserAuth} />
          <Route path="/profile" component={WelcomePage} />
          <Route path="/quiz" component={SignUpQuizContainer} />
          <Route path="/newentry" component={NewEntry} />
          <Route path="/entryquiz" component={EntryQuizContainer} />
          <Route path="/intro" component={IntroPage} />
          <Route path="/journal" component={Journal} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;

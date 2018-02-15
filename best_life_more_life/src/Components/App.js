import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
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
import HomePage from "./HomePage";
import BlogContainer from "./BlogContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/login" component={Home} />
        <Route path="/auth" component={UserAuth} />
        <Route path="/quiz" component={SignUpQuizContainer} />
        <Route path="/blogs" component={BlogContainer} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/newentry" component={NewEntry} />
        <Route path="/entryquiz" component={EntryQuizContainer} />
        <Route path="/intro" component={IntroPage} />
        <Route path="/journal" component={Journal} />
        <Route path="/" component={Home} />

        <Switch />
      </div>
    );
  }
}

export default App;

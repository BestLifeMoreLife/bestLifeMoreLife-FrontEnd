import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as actions from "../actions";
import EntryQuestion from "./EntryQuestion";
import BackgroundImage from "./BackgroundImage";

class EntryQuizContainer extends React.Component {
  state = {
    test: {}
  };

  componentDidMount() {
    this.fetchTest("New Entry Quiz");
  }

  fetchTest = name => {
    fetch(`http://localhost:3000/api/v1/tests`)
      .then(resp => resp.json())
      .then(resp => {
        return resp.forEach(test => {
          if (test.name === name) {
            this.setState({
              test: test
            });
          }
        });
      });
  };

  render() {
    let questions = this.state.test.questions;
    return (
      <div>
        <BackgroundImage />
        <Switch>
          <Route
            path="/entryquiz/:id"
            render={routerProps => {
              return <EntryQuestion {...routerProps} questions={questions} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
});

export default connect(mapStateToProps, actions)(EntryQuizContainer);

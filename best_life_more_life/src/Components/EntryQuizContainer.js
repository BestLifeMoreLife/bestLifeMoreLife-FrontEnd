import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as actions from "../actions";
import EntryQuestion from "./EntryQuestion";

class EntryQuizContainer extends React.Component {
  state = {
    test: {}
  };

  render() {
    return (
      <Switch>
        <Route
          path="/entryquiz/:id"
          render={routerProps => {
            return <EntryQuestion {...routerProps} questions={questions} />;
          }}
        />
      </Switch>
    );
  }
}

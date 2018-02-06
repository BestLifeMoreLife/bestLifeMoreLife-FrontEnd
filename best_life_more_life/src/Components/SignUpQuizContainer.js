import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as actions from "../actions";
import SignUpQuestion from "./SignUpQuestion";

class SignUpQuizContainer extends React.Component {
  state = {
    test: {}
  };
  componentDidMount() {
    this.fetchTest("Sign Up Quiz");
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
    console.log("render in sign up", this.state.test, questions);
    return (
      <Switch>
        <Route
          path="/quiz/:id"
          render={routerProps => {
            return <SignUpQuestion {...routerProps} questions={questions} />;
          }}
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
});
export default connect(mapStateToProps, actions)(SignUpQuizContainer);

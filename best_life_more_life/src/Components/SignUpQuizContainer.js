import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as actions from "../actions";
import SignUpQuestion from "./SignUpQuestion";

class SignUpQuizContainer extends React.Component {
  state = {
    test: {},
    questions: []
  };
  componentDidMount() {
    this.fetchTests("signup");
    this.fetchQuestions(this.state.test.id);
  }

  fetchTests = name => {
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

  fetchQuestions = id => {
    fetch(`http://localhost:3000/api/v1/questions`)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          questions: resp
        });
      });
  };

  render() {
    let questions = this.state.questions.length ? this.state.questions : {};
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

import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import SignUpQuestion from "./SignUpQuestion";

class SignUpQuizContainer extends React.Component {
  state = {
    test: {},
    questions: [],
    questionNumber: 0
  };
  componentDidMount() {
    this.fetchTests("signup");
    this.fetchQuestions(this.state.test.id);
  }

  fetchTests = name => {
    fetch(`http://localhost:3000/api/v1/tests`)
      .then(resp => resp.json())
      .then(resp => {
        return resp.map(test => {
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
    let num = this.state.questionNumber;
    let question = this.state.questions.length ? this.state.questions[num] : {};
    console.log("render", num, this.state.questions, question);
    return (
      <div>
        <SignUpQuestion question={question} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
});
export default connect(mapStateToProps, actions)(SignUpQuizContainer);

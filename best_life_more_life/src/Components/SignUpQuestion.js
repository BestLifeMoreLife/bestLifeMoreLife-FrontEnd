import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class SignUpQuestion extends React.Component {
  state = {
    user: this.props.user,
    selected: [],
    scores: {},
    score: 0
  };
  formRadioHandler = e => {
    let id = parseInt(e.target.id, 10);
    let score = parseInt(e.target.value, 10);
    let scores = this.state.scores;
    let selected = this.state.selected;
    selected.push(id);
    scores[id] = score;
    let total = Math.round(Object.values(scores).reduce((a, v) => a + v) / 2);
    this.setState({
      question_id: 0,
      selected: selected,
      scores: scores,
      score: total
    });
  };

  completeHandler = e => {
    e.preventDefault();
    this.props.updateUserScore(this.state, this.props.history);
  };

  render() {
    console.log("questions render", this.state);
    let questionId = this.props.match.url.split("/quiz/")[1];
    let nextId = +questionId + 1;
    let prevId = questionId - 1;
    let question = this.props.questions
      ? this.props.questions[questionId]
      : null;
    let questionContent = question ? (
      <p className="signupQuestion-question">{question.content}</p>
    ) : null;
    let answers = question ? question.answers : null;
    let answersList;
    if (answers) {
      answersList = answers.map(
        answer =>
          this.state.selected.includes(answer.id) ? (
            <div key={answer.id}>
              <label className="signupQuestion-answer">{answer.content}</label>
              <input
                type="radio"
                name="answers"
                checked
                value={answer.score}
                id={answer.id}
                className="signupQuestion-radio"
                onChange={this.formRadioHandler}
                data-tag={answer.question_id}
              />
            </div>
          ) : (
            <div key={answer.id}>
              <label className="signupQuestion-answer">{answer.content}</label>
              <input
                type="radio"
                name="answers"
                value={answer.score}
                id={answer.id}
                className="signupQuestion-radio"
                onChange={this.formRadioHandler}
                data-tag={answer.question_id}
              />
            </div>
          )
      );
    }

    return (
      <div className="signupQuestion-container">
        {question ? (
          <form className="signupQuestion-form">
            {questionContent}
            {answersList}
            <Link to={`/quiz/${nextId}`}>
              <button type="submit" className="signupQuestion-submit">
                Submit
              </button>
            </Link>
          </form>
        ) : (
          <div>
            <h1>All Done!</h1>
            <button
              className="signupQuestion-complete"
              type="submit"
              onClick={this.completeHandler}
            >
              Complete
            </button>
          </div>
        )}
        {questionId !== 0 && !!question === true ? (
          <Link className="signupQuestion-back" to={`/quiz/${prevId}`}>
            <button className="signupQuestion-back">Back</button>
          </Link>
        ) : null}
        {questionId !== 0 && !!question === false ? (
          <Link to={`/quiz/${prevId}`}>
            <button className="completedSignupQuestion-back">Back</button>
          </Link>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  };
};
export default connect(mapStateToProps, actions)(SignUpQuestion);

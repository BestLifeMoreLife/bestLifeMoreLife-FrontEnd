import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class SignUpQuestion extends React.Component {
  state = {
    user: this.props.user,
    selected: [],
    scores: {},
    moods: {},
    score: 0
  };
  formRadioHandler = e => {
    console.log("radio", e.target);
    let id = parseInt(e.target.id, 10);
    let score = parseInt(e.target.value, 10);
    let mood = e.target.className;
    let scores = this.state.scores;
    let moods = this.state.moods;
    let questionId = e.target.dataset.tag;
    let selected = this.state.selected;
    selected.push(id);
    scores[id] = score;
    moods[questionId] = mood;
    let total = Math.round(Object.values(scores).reduce((a, v) => a + v) / 2);
    console.log("handler", total);
    this.setState({
      question_id: 0,
      selected: selected,
      scores: scores,
      moods: moods,
      score: total
    });
  };

  completeHandler = e => {
    e.preventDefault();
    this.props.updateUser(this.state, this.props.history);
  };

  render() {
    console.log(this.state);
    let questionId = this.props.match.url.split("/quiz/")[1];
    let nextId = +questionId + 1;
    let prevId = questionId - 1;
    let question =
      this.props.questions.length > 0 ? this.props.questions[questionId] : null;
    let questionContent = question ? question.content : null;
    let answers = question ? question.answers : null;
    let answersList;
    if (answers) {
      answersList = answers.map(
        answer =>
          this.state.selected.includes(answer.id) ? (
            <div key={answer.id}>
              <label>{answer.content}</label>
              <input
                type="radio"
                name="answers"
                checked
                value={answer.score}
                id={answer.id}
                className={answer.mood}
                onChange={this.formRadioHandler}
                data-tag={answer.question_id}
              />
            </div>
          ) : (
            <div key={answer.id}>
              <label>{answer.content}</label>
              <input
                type="radio"
                name="answers"
                value={answer.score}
                id={answer.id}
                className={answer.mood}
                onChange={this.formRadioHandler}
                data-tag={answer.question_id}
              />
            </div>
          )
      );
    }

    return (
      <div>
        {question ? (
          <form>
            {questionContent ? questionContent : null}
            {answersList}
            <Link to={`/quiz/${nextId}`}>
              <button type="submit">Submit</button>
            </Link>
          </form>
        ) : (
          <div>
            <h1>All Done!</h1>
            <button type="submit" onClick={this.completeHandler}>
              Complete
            </button>
          </div>
        )}
        {questionId !== 0 ? (
          <Link to={`/quiz/${prevId}`}>
            <button>Back</button>
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

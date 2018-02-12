import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class EntryQuestion extends React.Component {
  state = {
    selected: [],
    score: 0
  };

  fetchPlaylist = () => {
    fetch("http://localhost:3000/api/v1/playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        artist: this.props.user.track.artist_id,
        score: this.state.score
      })
    })
      .then(resp => resp.json())
      .then(src => {
        this.props.playlistSrc(src);
      })
      .then(resp => this.props.history.push("/newentry"));
  };

  formRadioHandler = e => {
    let value = parseInt(e.target.value, 10);
    let selected = this.state.selected;
    selected.push(value);
    this.setState({
      selected: selected
    });
  };

  completeHandler = e => {
    e.preventDefault();
    let score = this.state.selected.reduce((a, b) => a + b);
    console.log("handler", score);
    this.setState(
      {
        score
      },
      () => this.fetchPlaylist()
    );
  };

  render() {
    let questionId = parseInt(this.props.match.url.split("/entryquiz/")[1], 10);

    let nextId = +questionId + 1;
    let prevId = questionId - 1;
    let question = this.props.questions
      ? this.props.questions[questionId]
      : null;
    let questionContent = question ? question.content : null;
    let answers = question ? question.answers : null;
    let answersList;
    if (answers) {
      answersList = answers.map(
        answer =>
          this.state.selected.includes(answer.id) ? (
            <div key={answer.id} className="entryQuiz-answer">
              <label>{answer.content}</label>
              <input
                type="radio"
                name="answers"
                checked
                value={answer.score}
                id={answer.id}
                onChange={this.formRadioHandler}
                data-tag={answer.question_id}
              />
            </div>
          ) : (
            <div key={answer.id} className="entryQuiz-answer">
              <label className="entryQuiz-answer">{answer.content}</label>
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
      <div className="entryQuiz-container">
        {question ? (
          <form className="entryQuiz-form">
            <p className="entryQuiz-question"> {questionContent}</p>
            <div className="entryQuiz-answersContainer">{answersList}</div>
            <Link to={`/entryquiz/${nextId}`}>
              <button className="entryQuiz-submitButton" type="submit">
                Submit
              </button>
            </Link>
          </form>
        ) : (
          <div>
            <h1 className="finished">Finished!</h1>
            <button
              className="entryQuiz-completeButton"
              onClick={this.completeHandler}
            >
              Complete
            </button>
          </div>
        )}
        {questionId !== 0 && !!question === true ? (
          <Link to={`/entryquiz/${prevId}`}>
            <button className="entryQuiz-backButton">Back</button>
          </Link>
        ) : null}
        {questionId !== 0 && !!question === false ? (
          <Link to={`/entryquiz/${prevId}`}>
            <button className="completedEntryQuiz-backButton">Back</button>
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
export default withRouter(connect(mapStateToProps, actions)(EntryQuestion));

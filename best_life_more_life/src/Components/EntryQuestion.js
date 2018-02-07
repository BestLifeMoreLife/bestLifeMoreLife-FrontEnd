import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class EntryQuestion extends React.Component {
  state = {
    user: this.props.user,
    selected: [],
    score: 0
  };

  fetchPlaylist = () => {
    console.log("fetch");
    fetch("http://localhost:3000/api/v1/playlists", {
      headers: {
        artist: this.state.user.artist,
        score: this.state.score
      }
    });
  };

  formRadioHandler = e => {
    let id = parseInt(e.target.id, 10);
    let questionId = e.target.dataset.tag;
    let selected = this.state.selected;
    selected.push(id);
    this.setState({
      selected: selected
    });
  };

  completeHandler = e => {
    e.preventDefault();
    console.log("handler");
    this.fetchPlaylist();
  };

  render() {
    let questionId = this.props.match.url.split("/entryquiz/")[1];
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
            <div key={answer.id}>
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
            {questionContent}
            {answersList}
            <Link to={`/entryquiz/${nextId}`}>
              <button type="submit">Submit</button>
            </Link>
          </form>
        ) : (
          <div>
            <h1>All Done!</h1>
            <button onClick={this.completeHandler}>Complete</button>
          </div>
        )}
        {questionId !== 0 ? (
          <Link to={`/entryquiz/${prevId}`}>
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
export default connect(mapStateToProps, actions)(EntryQuestion);

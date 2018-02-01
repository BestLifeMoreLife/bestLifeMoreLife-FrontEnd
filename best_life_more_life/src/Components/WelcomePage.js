import React from "react";
import { connect } from "react-redux";
import SignUpQuizContainer from "./SignUpQuizContainer";

class WelcomePage extends React.Component {
  state = {
    clickedQuiz: false
  };

  quizClickHandler = () => {
    this.setState({
      clickedQuiz: true
    });
  };
  render() {
    console.log("welcome", this.props.user);
    return (
      <div>
        <h1>Welcome</h1>
        {this.props.user.score ? (
          <h3>Got a score</h3>
        ) : this.state.clickedQuiz === false ? (
          <SignUpQuizContainer />
        ) : (
          <button onClick={this.quizClickHandler}>Take Quiz</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser ? state.currentUser : null
});
export default connect(mapStateToProps)(WelcomePage);

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
        {this.props.user.score > 0 ? (
          <h3>Got a score</h3>
        ) : (
          <Link to="/quiz/0">Get Started</Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser ? state.currentUser : null
});
export default connect(mapStateToProps)(WelcomePage);

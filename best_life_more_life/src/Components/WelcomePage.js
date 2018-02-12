import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import BackgroundImage from "./BackgroundImage";

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
    console.log(this.props);
    return (
      <div>
        <BackgroundImage location="welcomePage" />
        {this.props.user.score > 0 ? (
          <HomePage />
        ) : (
          <Link to="/quiz/0">
            <div id="subtext">Click to Get Started</div>
          </Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
});
export default connect(mapStateToProps)(WelcomePage);

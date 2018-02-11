import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

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
        <div className="welcome-image">
          <image
            src="http://wallpapersdsc.net/wp-content/uploads/2015/11/10120.jpg"
            alt=""
          />
        </div>
        {this.props.user.score > 0 ? (
          <HomePage />
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

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import BackgroundImage from "./BackgroundImage";
const kanye =
  "https://hdwallsource.com/img/2017/4/kanye-west-performing-hd-wallpaper-59575-61362-hd-wallpapers.jpg";
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
        <BackgroundImage pic={kanye} />
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

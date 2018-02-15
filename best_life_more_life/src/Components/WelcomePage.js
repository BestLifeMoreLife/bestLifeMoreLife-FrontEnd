import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import HomePage from "./HomePage";
import BackgroundImage from "./BackgroundImage";

class WelcomePage extends React.Component {
  state = {
    clickedQuiz: false
  };

  componentDidMount() {
    this.props.user.score > 0 ? this.props.history.push("/homepage") : null;
  }

  quizClickHandler = () => {
    this.setState({
      clickedQuiz: true
    });
  };
  render() {
    return (
      <div>
        <BackgroundImage />

        <Link to="/quiz/0">
          <div id="subtext">Click to Get Started</div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
});
export default withRouter(connect(mapStateToProps)(WelcomePage));

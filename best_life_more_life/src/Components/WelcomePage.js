import React from "react";
import { connect } from "react-redux";

class WelcomePage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Welcome</h1>
        <h3>Take Quiz</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
});
export default connect(mapStateToProps)(WelcomePage);

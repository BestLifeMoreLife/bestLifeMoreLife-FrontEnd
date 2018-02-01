import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class SignUpQuizContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTests();
  }
  render() {
    console.log("quiz", this.props);
    return <h1>Quiz Page</h1>;
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
});
export default connect(mapStateToProps, actions)(SignUpQuizContainer);

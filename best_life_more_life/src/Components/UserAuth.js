import React from "react";
import * as actions from "../actions/index";
import { connect } from "react-redux";

class UserAuth extends React.Component {
  componentDidMount() {
    const spotify_code = this.props.location.search.split("?code=")[1];
    const history = this.props.history;
    if (spotify_code) {
      this.props.login(spotify_code, history);
    }
  }
  render() {
    console.log("auth");
    return "in userauth";
  }
}

export default connect(null, actions)(UserAuth);

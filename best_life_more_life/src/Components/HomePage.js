import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import BackgroundImage from "./BackgroundImage";
import HomeComponents from "./HomeComponents";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchJournal(this.props.user.id);
  }
  render() {
    console.log("home!!!!");
    return (
      <div>
        <BackgroundImage />
        <HomeComponents />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  };
};

export default withRouter(connect(mapStateToProps, actions)(HomePage));

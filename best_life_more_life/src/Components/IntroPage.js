import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import BackgroundImage from "./BackgroundImage";

const IntroPage = props => {
  console.log(props);
  return (
    <div>
      <BackgroundImage />
      <h1
        onClick={() => props.newJournal(props.user.id, props.history)}
        id="intro"
      >
        Start {props.user.track.name} track
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.currentUser
  };
};
export default withRouter(connect(mapStateToProps, actions)(IntroPage));

import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

const IntroPage = props => {
  console.log(props);
  return (
    <div>
      {`You're on the ${props.user.track} track`}
      <h2 onClick={() => props.newJournal(props.user.id, props.history)}>
        Start New Journal
      </h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.currentUser
  };
};
export default withRouter(connect(mapStateToProps, actions)(IntroPage));

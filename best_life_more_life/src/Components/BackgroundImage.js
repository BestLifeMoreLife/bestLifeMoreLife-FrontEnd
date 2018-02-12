import React from "react";
import { connect } from "react-redux";
import { kanyeMain, kanyeSecondary } from "../photos/imageLinks";
const BackgroundImage = props => {
  const loggedIn = !!props.user.name;
  const tookQuiz = !!props.user.track;
  const userArtist = props.user.artist ? props.user.artist.name : null;
  return (
    <div className="background-image">
      <img src={kanyeSecondary} alt="" />
      {/*<div className="background-text">{"Best Life, More Life"}</div>*/}
      {/*<div className="background-subtext">{"It's Okay To Not Be Okay"}</div>*/}
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.currentUser };
};
export default connect(mapStateToProps)(BackgroundImage);

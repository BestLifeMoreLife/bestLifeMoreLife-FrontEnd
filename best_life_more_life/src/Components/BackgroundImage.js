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
      {props.playlist ? (
        <div className="iFrame">
          <iframe
            src={props.playlist.link}
            title={props.playlist.link}
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
          />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.currentUser, playlist: state.playlist_src };
};
export default connect(mapStateToProps)(BackgroundImage);

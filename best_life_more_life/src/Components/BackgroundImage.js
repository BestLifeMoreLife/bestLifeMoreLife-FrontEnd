import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class BackgroundImage extends React.Component {
  render() {
    console.log("BACKGROUND", this.props.user);
    const loggedIn = !!this.props.user;
    let tookQuiz;
    if (this.props.user) {
      tookQuiz = !!this.props.user.track;
    }
    let userArtist;
    if (this.props.user) {
      userArtist = this.props.user.artist;
    }

    let src = () => {
      switch (this.props.location.pathname) {
        case "/intro":
          return this.props.user.artist.home_photo;
        case "/blogs":
          return this.props.user.artist.home_photo;
        case "/home":
          return this.props.user.artist.home_photo;
        case "/homepage":
          return this.props.user
            ? this.props.user.artist.home_photo
            : "http://i.imgur.com/0JEyLof.jpg";
        case "/welcome":
          return this.props.user.track
            ? this.props.user.artist.home_photo
            : "http://i.imgur.com/0JEyLof.jpg";
        case "/journal":
          return this.props.user.artist.home_photo;
        case "/newentry":
          return this.props.entry_pic;
        default:
          return "http://i.imgur.com/0JEyLof.jpg";
      }
    };
    return (
      <div>
        {this.props.playlist ? (
          <iframe
            src={this.props.playlist.link}
            title={this.props.playlist.link}
            width="300"
            height="700"
            frameBorder="0"
            allowtransparency="true"
          />
        ) : null}
        <div className="background-image">
          <img src={src()} alt="" />
          {this.props.location.pathname === "home" ||
          this.props.location.pathname === "/" ? (
            <div className="background-text">{"Best Life, More Life"}</div>
          ) : null}
          {this.props.location.pathname.includes("/entryquiz/") ? (
            <div className="entryQuiz-backgroundText">
              {"Best Life, More Life"}
            </div>
          ) : null}
          <div className="overlay" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    playlist: state.playlist_src,
    entry_pic: state.entry_pic
  };
};
export default withRouter(connect(mapStateToProps)(BackgroundImage));

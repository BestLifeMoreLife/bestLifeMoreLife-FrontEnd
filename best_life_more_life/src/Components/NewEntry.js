import React from "react";
import { connect } from "react-redux";
import Submission from "./Submission";
import BackgroundImage from "./BackgroundImage";

class NewEntry extends React.Component {
  render() {
    return (
      <div>
        <BackgroundImage />

        <Submission journal_id={this.props.journal_id} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { src: state.playlist_src, journal_id: state.journal.id };
};

export default connect(mapStateToProps)(NewEntry);

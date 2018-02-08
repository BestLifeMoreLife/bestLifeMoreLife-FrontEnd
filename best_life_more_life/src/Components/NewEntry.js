import React from "react";
import { connect } from "react-redux";
import Submission from "./Submission";

class NewEntry extends React.Component {
  render() {
    console.log("test", this.props.src.link);
    return (
      <div>
        <iframe
          src={this.props.src.link}
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
        />
        <Submission journal_id={this.props.journal_id} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { src: state.playlist_src, journal_id: state.journal.id };
};

export default connect(mapStateToProps)(NewEntry);

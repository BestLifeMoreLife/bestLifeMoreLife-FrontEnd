import React from "react";
import { connect } from "react-redux";

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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { src: state.playlist_src };
};

export default connect(mapStateToProps)(NewEntry);

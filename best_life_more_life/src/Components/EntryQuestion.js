import React from "react";

class EntryQuestion extends React.Component {
  state = {
    user: this.props.user,
    mood: "",
    catharsis: true
  };
  render() {
    return <div />;
  }
}

export default connect(mapStateToProps, actions)(Entry);

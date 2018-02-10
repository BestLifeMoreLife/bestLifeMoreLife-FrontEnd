import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BackgroundImage from "./BackgroundImage";
import * as actions from "../actions";

const em = "http://wallpapersdsc.net/wp-content/uploads/2015/11/10120.jpg";

class Home extends React.Component {
  componentDidMount() {
    this.props.resetUser(this.props.history);
  }
  render() {
    return (
      <div className="grid-container">
        <BackgroundImage pic={em} />
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(Home));

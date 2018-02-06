import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchJournal(this.props.user.id);
  }
  render() {
    return (
      <div>
        <h1>Your Home Page</h1>
        <Link to="/journal">
          <h2>Go To Your Journals</h2>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  };
};

export default withRouter(connect(mapStateToProps, actions)(HomePage));

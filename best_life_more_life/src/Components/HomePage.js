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
        <button class="ui button" role="button">
          Toggle Visibility
        </button>
        <div class="ui segment pushable">
          <div class="ui inverted vertical labeled icon ui scale down left thin sidebar menu">
            <div class="item">
              <i aria-hidden="true" class="home icon" />Home
            </div>
            <div class="item">
              <i aria-hidden="true" class="gamepad icon" />Games
            </div>
            <div class="item">
              <i aria-hidden="true" class="camera icon" />Channels
            </div>
          </div>
          <div class="pusher">
            <div class="ui basic segment">
              <h3 class="ui header">Application Content</h3>
              <img
                src="/assets/images/wireframe/paragraph.png"
                class="ui image"
              />
            </div>
          </div>
        </div>
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

import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class EditForm extends React.Component {
  state = {
    content: this.props.content
  };

  editEntry = e => {
    e.preventDefault();
    let entry_id = this.props.entry.id;
    let content = e.target.value;
    this.props.editEntry(entry_id, content, this.props.history);
    this.setState({
      content: ""
    });
  };

  deleteEntry = e => {
    e.preventDefault();
    let entry_id = this.props.entry.id;
    this.props.deleteEntry(entry_id, this.props.history);
  };

  render() {
    return (
      <div>
        <div className="update-form">
          <div id="wrapper">
            <form id="paper" method="get" action="">
              {/*<div id="margin">
                "Your girl don't like me how long has she been gay???" - Kanye
                West
              </div>*/}
              <div className="textarea-container">
                <textarea
                  placeholder="Enter something funny."
                  value={this.props.content}
                  onChange={this.props.changeHandler}
                  id="text"
                  name="text"
                  rows="4"
                />
              </div>
              <br />
              <button
                id="button"
                value={this.props.content}
                className="editForm-submit"
                onClick={this.editEntry}
              >
                Update
              </button>
              <button
                id="button"
                className="editForm-delete"
                onClick={this.deleteEntry}
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.currentUser };
};

export default withRouter(connect(mapStateToProps, actions)(EditForm));

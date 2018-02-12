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
              <div id="margin">
                Title: <input id="title" type="text" name="title" />
              </div>
              <div className="form-container">
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
                Edit
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

export default withRouter(connect(null, actions)(EditForm));

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
        <form>
          <input
            type="textbox"
            value={this.props.content}
            onChange={this.props.changeHandler}
          />
          <button onClick={this.editEntry} value={this.props.content}>
            Update
          </button>{" "}
          <button onClick={this.deleteEntry}>Delete</button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(EditForm));

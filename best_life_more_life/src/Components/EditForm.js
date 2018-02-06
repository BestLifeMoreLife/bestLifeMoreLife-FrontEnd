import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class EditForm extends React.Component {
  state = {
    content: ""
  };

  formChangeHandler = e => {
    this.setState({
      content: e.target.value
    });
  };

  editEntry = e => {
    e.preventDefault();
    let entry_id = this.props.entry.id;
    let content = this.state.content;
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
            value={this.state.content}
            onChange={this.formChangeHandler}
          />
          <button onClick={this.editEntry}>Update</button>{" "}
          <button onClick={this.deleteEntry}>Delete</button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(EditForm));

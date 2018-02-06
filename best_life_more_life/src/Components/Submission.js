import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Submission extends React.Component {
  state = {
    content: "",
    public: false,
    journal_id: this.props.journal_id
  };

  formChangeHandler = e => {
    let content = e.target.value;
    this.setState({
      content
    });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    this.props.createEntry(this.state, this.props.history);
    this.setState({
      content: "",
      public: !this.state.public
    });
  };

  checkboxChangeHandler = e => {
    this.setState({
      public: !this.state.public
    });
  };

  render() {
    return (
      <div>
        <input
          type="textbox"
          value={this.state.content}
          onChange={this.formChangeHandler}
        />
        <label>
          Public?
          <input type="checkbox" onChange={this.checkboxChangeHandler} />
        </label>
        <button onClick={this.formSubmitHandler}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    journal_id: state.journal.id
  };
};
export default withRouter(connect(mapStateToProps, actions)(Submission));

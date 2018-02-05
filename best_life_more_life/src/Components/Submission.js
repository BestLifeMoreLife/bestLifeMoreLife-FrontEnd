import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Journal from "./Journal";

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

  checkboxChangeHandler = e => {
    this.setState({
      public: !this.state.public
    });
  };
  render() {
    console.log("submission", this.state, this.props.journal_id);
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
        <button onClick={() => this.props.handleNewEntry(this.state)}>
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    journal_id: state.journal.id
  };
};
export default withRouter(connect(mapStateToProps)(Submission));

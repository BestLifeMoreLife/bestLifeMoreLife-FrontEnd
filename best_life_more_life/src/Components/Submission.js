import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Submission extends React.Component {
  state = {
    content:
      `"${this.props.artist_quotes[0].content}"` +
      `${this.props.artist_quotes[0].song}`,
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

  matchQuote;

  render() {
    console.log(this.props);
    return (
      <div className="newEntry-masterDiv">
        <div id="wrapper">
          <form id="paper" action="">
            <div className="newEntry-container">
              <textarea
                className="newEntry-textarea"
                placeholder="Enter something funny."
                value={this.state.content}
                onChange={this.formChangeHandler}
                id="newEntry-text"
                name="text"
                rows="4"
              />
            </div>
            <br />
            <button
              id="newEntry-button"
              value={this.props.content}
              className="newEntry-submit"
              onClick={this.formSubmitHandler}
            >
              Submit
            </button>
            <label className="public">
              Public?
              <input type="checkbox" onChange={this.checkboxChangeHandler} />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    journal_id: state.journal.id,
    artist_quotes: state.quote
  };
};
export default withRouter(connect(mapStateToProps, actions)(Submission));

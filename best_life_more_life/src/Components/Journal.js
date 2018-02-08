import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Submission from "./Submission";
import EntryQuizContainer from "./EntryQuizContainer";
import EditForm from "./EditForm";
import * as actions from "../actions";

class Journal extends React.Component {
  state = {
    newEntryClicked: false,
    entry: {},
    entryClicked: [],
    entry_content: ""
  };

  componentDidMount() {
    this.props.fetchEntries(this.props.journal_id);
    this.setState({
      newEntryClicked: false
    });
  }

  entryClickHandler = e => {
    let entry_id = parseInt(e.target.id, 10);
    let entry = this.props.entries.find(entry => entry.id === entry_id);
    this.setState({
      newEntryClicked: false,
      entry: entry,
      entryClicked: [parseInt(e.target.id, 10)],
      entry_content: entry.content
    });
  };

  newEntryButtonHandler = () => {
    this.setState({
      newEntryClicked: true
    });
  };

  formChangeHandler = e => {
    this.setState({
      entry_content: e.target.value
    });
  };
  render() {
    console.log("test", this.props);
    let entries = this.props.entries.length
      ? this.props.entries.map(entry => {
          let preview = entry.content.substr(0, 15);
          return (
            <h3 id={entry.id} key={entry.id} onClick={this.entryClickHandler}>
              {preview}
            </h3>
          );
        })
      : null;

    return (
      <div>
        <h1>Your Journal</h1>
        <Link to="/entryquiz/0">
          <button>New Entry</button>
        </Link>

        {this.state.newEntryClicked ? <EntryQuizContainer /> : null}
        {entries ? entries : null}
        {this.state.entry_content ? (
          <EditForm
            content={this.state.entry_content}
            changeHandler={this.formChangeHandler}
            entry={this.state.entry}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    journal_id: state.journal.id,
    entries: state.entries,
    newEntryClicked: state.newEntryClicked
  };
};

export default withRouter(connect(mapStateToProps, actions)(Journal));

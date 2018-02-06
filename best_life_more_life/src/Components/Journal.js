import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Submission from "./Submission";
import * as actions from "../actions";

class Journal extends React.Component {
  state = {
    entries: [],
    newEntryClicked: false
  };

  createEntry = entry => {
    fetch(`http://localhost:3000/api/v1/entries/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        content: entry.content,
        public: entry.public,
        journal_id: entry.journal_id
      })
    })
      .then(resp => resp.json())
      .then(entry =>
        this.setState({
          entries: [...this.state.entries, entry],
          newEntryClicked: false
        })
      );
  };

  fetchEntries = id => {
    fetch(`http://localhost:3000/api/v1/journals/${id}`)
      .then(resp => resp.json())
      .then(journal => {
        this.setState({
          entries: journal.entries.reverse(),
          newEntryClicked: false
        });
      });
  };

  newEntryHandler = () => {
    this.setState({
      newEntryClicked: true
    });
  };
  render() {
    console.log(this.props.journal);
    let entries = this.state.entries.length
      ? this.state.entries.map(entry => <h3>{entry.content}</h3>)
      : null;
    return (
      <div>
        <h1>Your Journal</h1>
        <button onClick={this.newEntryHandler}>New Entry</button>
        {this.state.newEntryClicked ? (
          <Submission
            journalId={this.props.journal.id}
            handleNewEntry={this.createEntry}
          />
        ) : null}
        {entries ? entries : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    journal: state.journal
  };
};

export default withRouter(connect(mapStateToProps, actions)(Journal));

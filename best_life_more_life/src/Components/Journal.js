import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Submission from "./Submission";
import EditForm from "./EditForm";
import * as actions from "../actions";

class Journal extends React.Component {
  state = {
    newEntryClicked: false,
    entryClicked: []
  };

  componentDidMount() {
    this.props.fetchEntries(this.props.journal_id);
    this.setState({
      newEntryClicked: false
    });
  }

  entryClickHandler = e => {
    this.setState({
      entryClicked: [parseInt(e.target.id, 10)]
    });
  };

  newEntryButtonHandler = () => {
    this.setState({
      newEntryClicked: true
    });
  };

  render() {
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
    let entry = this.state.entryClicked.length
      ? this.props.entries.find(
          entry => entry.id === this.state.entryClicked[0]
        )
      : null;
    return (
      <div>
        <h1>Your Journal</h1>
        <button onClick={this.newEntryButtonHandler}>New Entry</button>
        {this.state.newEntryClicked ? (
          <Submission journalId={this.props.journal_id} />
        ) : null}
        {entries ? entries : null}
        {entry ? <EditForm entry={entry} /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    journal_id: state.journal.id,
    entries: state.entries
  };
};

export default withRouter(connect(mapStateToProps, actions)(Journal));

import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import EntryQuizContainer from "./EntryQuizContainer";
import EditForm from "./EditForm";
import BackgroundImage from "./BackgroundImage";
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
          let date = entry.updated_at.split("T")[0];
          return (
            <div
              role="listitem"
              className="item"
              id={entry.id}
              key={entry.id}
              onClick={this.entryClickHandler}
            >
              <img
                src="https://image.flaticon.com/icons/png/512/201/201585.png"
                className="entry-logo"
                id={entry.id}
              />
              <div className="content" id={entry.id}>
                <a className="header" id={entry.id}>
                  {date}
                </a>
                <div class="description" id={entry.id}>
                  {preview}
                </div>
              </div>
            </div>
          );
        })
      : null;

    return (
      <div>
        <BackgroundImage />
        <div className="entries-container">{entries ? entries : null}</div>
        <Link to="/entryquiz/0">
          <button>New Entry</button>
        </Link>;
        {this.state.newEntryClicked ? <EntryQuizContainer /> : null}
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

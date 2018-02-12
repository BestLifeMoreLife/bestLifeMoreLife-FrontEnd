import {
  LOGIN,
  UPDATE,
  NEW_JOURNAL,
  GET_JOURNAL,
  FETCH_ENTRIES,
  ADD_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY
} from "./types";

export function login(spotify_code, history) {
  console.log("in login");
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ spotify_code })
    })
      .then(res => res.json())
      .then(user => {
        localStorage.setItem("jwt", user.token);
        dispatch({ type: LOGIN, user });
        history.push("/welcome");
      });
  };
}
export function updateUserScore(props, history) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/new`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ score: props.score, user: props.user })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: UPDATE, user: data.user });

        history.push("/intro");
      });
  };
}

export function newJournal(user_id, history) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/journals/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user_id })
    })
      .then(res => res.json())
      .then(journal => {
        dispatch({ type: NEW_JOURNAL, journal });
        history.push("/journal");
      });
  };
}
export function fetchJournal(user_id, history) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/journals/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(journal => {
        dispatch({ type: GET_JOURNAL, journal: journal[0] });
      });
  };
}

export function fetchEntries(journal_id) {
  return dispatch => {
    let id = parseInt(journal_id, 10);
    return fetch(`http://localhost:3000/api/v1/journals/${id}`)
      .then(resp => resp.json())
      .then(journal => {
        dispatch({ type: FETCH_ENTRIES, entries: journal.entries });
      });
  };
}

export function createEntry(entry, history) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/entries/new`, {
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
      .then(entries => {
        dispatch({ type: ADD_ENTRY, entries });
        history.push("/journal");
      });
  };
}

export function editEntry(entry_id, content, history) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/entries/${entry_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ content })
    })
      .then(res => res.json())
      .then(entries => {
        dispatch({
          type: EDIT_ENTRY,
          entries: entries.reverse()
        });
        history.push("/journal");
      });
  };
}
export function deleteEntry(entry_id, history) {
  return dispatch => {
    window.alert("are you sure?");
    return fetch(`http://localhost:3000/api/v1/entries/${entry_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(entries => {
        dispatch({
          type: DELETE_ENTRY,
          entries: entries.reverse()
        });
        history.push("/journal");
      });
  };
}

export function playlistSrc(src) {
  return { type: "SRC", src };
}

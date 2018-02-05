import { LOGIN, UPDATE, NEW_JOURNAL } from "./types";

export function login(spotify_code, history) {
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
        history.push("/profile");
      });
  };
}
export function updateUser(props, history) {
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
      .then(user => {
        dispatch({ type: UPDATE, user });
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

import { LOGIN } from "./types";

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
        console.log(user);
        localStorage.setItem("jwt", user.token);
        dispatch({ type: LOGIN, user });
        history.push("/profile");
      });
  };
}

export function fetchTests() {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/tests`)
      .then(resp => resp.json())
      .then(resp => {
        console.log("in fetch", resp);
      });
  };
}

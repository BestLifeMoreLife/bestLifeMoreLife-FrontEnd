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
        localStorage.setItem("jwt", user.token);
        dispatch({ type: LOGIN, user });
        history.push("/profile");
      });
  };
}
export function updateUser({ score, user }) {
  console.log("patch", score, user);
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/users/new`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ score, user })
    })
      .then(res => res.json())
      .then(console.log);
  };
}

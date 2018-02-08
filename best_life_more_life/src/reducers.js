import { combineReducers } from "redux";
import {
  LOGIN,
  UPDATE,
  NEW_JOURNAL,
  GET_JOURNAL,
  FETCH_ENTRIES,
  ADD_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY
} from "./actions/types";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return action.user;
    case UPDATE:
      return action.user;
    default:
      return state;
  }
};
const journalReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_JOURNAL:
      return action.journal;
    case GET_JOURNAL:
      return action.journal;
    default:
      return state;
  }
};

const entriesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ENTRIES:
      return action.entries;
    case ADD_ENTRY:
      return action.entries;
    case EDIT_ENTRY:
      return action.entries;
    case DELETE_ENTRY:
      return action.entries;
    default:
      return state;
  }
};

const playlistReducer = (state = "", action) => {
  switch (action.type) {
    case "SRC":
      return action.src;
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  currentUser: userReducer,
  journal: journalReducer,
  entries: entriesReducer,
  playlist_src: playlistReducer
});

export default rootReducer;

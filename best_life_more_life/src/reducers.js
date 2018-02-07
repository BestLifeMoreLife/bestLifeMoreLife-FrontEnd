import { combineReducers } from "redux";
import {
  LOGIN,
  UPDATE,
  NEW_JOURNAL,
  GET_JOURNAL,
  FETCH_ENTRIES,
  ADD_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY,
  UPDATE_ENTRY_CLICKED
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
const rootReducer = combineReducers({
  currentUser: userReducer,
  journal: journalReducer,
  entries: entriesReducer
});

export default rootReducer;

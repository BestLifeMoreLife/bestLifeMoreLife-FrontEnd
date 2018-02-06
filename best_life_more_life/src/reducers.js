import { combineReducers } from "redux";
import { LOGIN, UPDATE, NEW_JOURNAL, GET_JOURNAL } from "./actions/types";

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

const rootReducer = combineReducers({
  currentUser: userReducer,
  journal: journalReducer
});

export default rootReducer;

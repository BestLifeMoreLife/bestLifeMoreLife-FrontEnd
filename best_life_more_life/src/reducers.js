import { combineReducers } from "redux";
import { LOGIN } from "./actions/types";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return action.user;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentUser: userReducer
});

export default rootReducer;

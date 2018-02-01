import { combineReducers } from "redux";
import { LOGIN } from "./actions/types";

const userReducer = (state = {}, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case LOGIN:
      console.log(action);
      return action.user;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentUser: userReducer
});

export default rootReducer;

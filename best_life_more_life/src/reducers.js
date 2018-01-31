import { combineReducers } from "redux";
import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_ACTIVE_PAINTING,
  SELECT_MUSEUM
} from "./actions/types";

let arr = [];
const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload];
    case DELETE_ACTIVE_PAINTING:
      arr = state.filter(p => {
        return p.id !== action.id;
      });
      return arr;
    default:
      return state;
  }
};

const filteredPaintingsReducer = (state = [], action) => {
  switch (action.type) {
    case SELECT_MUSEUM:
      arr = action.payload.filter(p => {
        return p.museum.id === action.id;
      });
      return arr;
    case FETCH_PAINTINGS:
      return (state = []);
    default:
      return state;
  }
};

const activeMuseumReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_MUSEUM:
      return action.id;
    default:
      return state;
  }
};

const activePaintingIdReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_ACTIVE_PAINTING:
      return action.id;
    case DELETE_ACTIVE_PAINTING:
      return null;
    case FETCH_PAINTINGS:
      return action.payload[0].id;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer,
  activeMuseum: activeMuseumReducer,
  filteredPaintings: filteredPaintingsReducer
});

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;

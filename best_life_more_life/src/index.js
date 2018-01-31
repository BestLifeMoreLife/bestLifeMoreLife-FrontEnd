import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import App from "./Components/App";
import configureStore from "./configureStore";
import rootReducer from "./reducers";

const store = configureStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

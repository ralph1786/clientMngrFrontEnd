import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import authReducer from "./reducer/authReducer";
import childReducer from "./reducer/childReducer";

const rootReducer = combineReducers({
  provider: authReducer,
  children: childReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

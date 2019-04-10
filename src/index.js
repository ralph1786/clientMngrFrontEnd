import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";
import App from "./App";
import authReducer from "./reducer/authReducer";
import childReducer from "./reducer/childReducer";
import editReducer from "./reducer/editReducer";
import parentReducer from "./reducer/parentReducer";

const rootReducer = combineReducers({
  provider: authReducer,
  children: childReducer,
  editChild: editReducer,
  parents: parentReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

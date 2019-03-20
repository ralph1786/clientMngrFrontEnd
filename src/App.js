import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./containers/Home";
import LoginForm from "./components/LoginForm";
import Dashboard from "./containers/Dashboard";
import CreateForm from "./components/CreateForm";
import EditForm from "./components/EditForm.js";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  render() {
    // console.log(this.props.provider.provider);

    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            path="/login"
            render={() =>
              Object.keys(this.props.provider.provider).length > 0 ? (
                <Redirect to="/dashboard" />
              ) : (
                <LoginForm logInSubmitHandler={this.logInSubmitHandler} />
              )
            }
          />
          <Route path="/create" render={() => <CreateForm />} />
          <Route path="/edit" render={() => <EditForm />} />
          <Route
            path="/dashboard"
            render={() =>
              // Object.keys(this.props.provider.provider).length > 0 ? (
              //   <Dashboard />
              // ) : (
              //   <Redirect to="/" />
              // )
              localStorage.getItem("token") ? (
                <Dashboard />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    provider: state.provider
  };
};

export default withRouter(connect(mapStateToProps)(App));

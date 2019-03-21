import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./containers/Home";
import LoginForm from "./components/LoginForm";
import Dashboard from "./containers/Dashboard";
import CreateForm from "./components/CreateForm";
import EditForm from "./components/EditForm.js";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";
import { loginProvider } from "./actions/authActions";

import "./App.css";

class App extends Component {
  // componentDidMount() {
  //   let token = localStorage.token;
  //   if (token) {
  //     this.props.loginProvider(this.props.provider.provider);
  //   }
  // }

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
                <LoginForm />
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
          <Route path="/parent_dashboar" render={() => <LoginForm />} />
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

const mapDispatchToProps = dispatch => {
  return {
    loginProvider: providerObj => dispatch(loginProvider(providerObj))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

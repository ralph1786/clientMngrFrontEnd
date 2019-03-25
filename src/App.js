import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./containers/Home";
import LoginForm from "./components/LoginForm";
import ParentLoginForm from "./components/ParentLoginForm";
import Dashboard from "./containers/Dashboard";
import ParentDashboard from "./containers/ParentDashboard";
import CreateForm from "./components/CreateForm";
import EditForm from "./components/EditForm.js";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";
// import { loginProvider } from "./actions/authActions";
import { setProvider } from "./actions/authActions";

import "./App.css";

class App extends Component {
  // componentDidMount() {
  //   let token = localStorage.token;
  //   fetch("http://localhost:80/api/v1/dashboard", {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //       accepts: "application/json",
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res.provider);
  //       // this.props.setProvider(res.provider);
  //     });
  // }

  render() {
    // console.log(this.props);
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
          <Route
            path="/parent_login"
            render={() =>
              Object.keys(this.props.provider.parent).length > 0 ? (
                <Redirect to="/parent_dashboard" />
              ) : (
                <ParentLoginForm />
              )
            }
          />
          <Route
            path="/parent_dashboard"
            render={() =>
              localStorage.getItem("token") ? (
                <ParentDashboard />
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

const mapDispatchToProps = dispatch => {
  return {
    setProvider: providerObj => dispatch(setProvider(providerObj))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

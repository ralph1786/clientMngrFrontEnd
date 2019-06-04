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
import ParentSignUp from "./components/ParentSignUp";
import PaymentModal from "./components/PaymentModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideDrawer from "./components/SideDrawer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SideDrawer />
        <Switch>
          <Route
            path="/login"
            render={() =>
              this.props.provider.provider === undefined ||
              Object.keys(this.props.provider.provider).length < 1 ? (
                <LoginForm />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />
          <Route
            path="/create"
            render={() =>
              localStorage.getItem("token") ? (
                <CreateForm />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/edit"
            render={() =>
              localStorage.getItem("token") ? <EditForm /> : <Redirect to="/" />
            }
          />
          <Route path="/edit_parent" render={() => <EditForm />} />
          <Route
            path="/dashboard"
            render={() =>
              localStorage.getItem("token") ? (
                <Dashboard />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/parent_login"
            render={() =>
              this.props.provider.parent === undefined ||
              Object.keys(this.props.provider.parent).length < 1 ? (
                <ParentLoginForm />
              ) : (
                <Redirect to="/parent_dashboard" />
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
                // this.props.history.push("/parent_login")
              )
            }
          />
          <Route
            path="/payment_modal"
            render={() =>
              localStorage.getItem("token") ? (
                <PaymentModal />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="/parent_sign" render={() => <ParentSignUp />} />
          <Route path="/" component={Home} />
        </Switch>
        <ToastContainer autoClose={3000} />
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

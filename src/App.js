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
// import { setProvider } from "./actions/authActions";
import PaymentModal from "./components/PaymentModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

class App extends Component {
  // componentDidMount() {
  //   let token = localStorage.token;
  //   if (token) {
  //     fetch("http://localhost:80/api/v1/dashboard", {
  //       method: "GET",
  //       headers: {
  //         "content-type": "application/json",
  //         accepts: "application/json",
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         // console.log(res.provider);
  //         if (res.error) {
  //           return <Redirect to="/login" />;
  //         } else {
  //           this.props.setProvider(res.provider);
  //         }
  //       })
  //       .catch(err => console.log(err));
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
              this.props.provider.provider === undefined ||
              Object.keys(this.props.provider.provider).length < 1 ? (
                <LoginForm />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />
          <Route path="/create" render={() => <CreateForm />} />
          <Route path="/edit" render={() => <EditForm />} />
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
                <Redirect to="/parent_login" />
              )
            }
          />
          <Route path="/payment_modal" render={() => <PaymentModal />} />
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

const mapDispatchToProps = dispatch => {
  return {
    // setProvider: providerObj => dispatch(setProvider(providerObj))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

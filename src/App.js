import React, { PureComponent, Fragment } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./containers/Home";
import LoginForm from "./components/Forms/AuthForms/LoginForm";
import ParentLoginForm from "./components/Forms/AuthForms/ParentLoginForm";
import Dashboard from "./containers/Dashboard";
import ParentDashboard from "./containers/ParentDashboard";
import CreateForm from "./components/Forms/CreateForm";
import EditForm from "./components/Forms/EditForm";
import Navbar from "./components/Navigation/Navbar";
import { connect } from "react-redux";
import ParentSignUp from "./components/Forms/ParentSignUp";
import PaymentModal from "./components/PaymentModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideDrawer from "./components/UX/SideDrawer";
import { closeSideDrawer } from "./actions/uiActions";

import "./App.scss";

class App extends PureComponent {
  state = {
    scrolled: false
  };

  scrollHandler = () => {
    if (window.pageYOffset > 75) {
      this.setState({
        scrolled: true
      });
    } else {
      this.setState({
        scrolled: false
      });
    }
  };

  componentDidMount() {
    document.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollHandler);
  }

  render() {
    console.log(this.state.scrolled);
    return (
      <Fragment>
        <Navbar scrolled={this.state.scrolled} />
        <SideDrawer />
        <div
          className={this.props.isDrawerOpen ? "overlay" : ""}
          onClick={this.props.closeSideDrawer}
        />
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
          <Route
            path="/edit_parent"
            render={() =>
              localStorage.getItem("token") ? <EditForm /> : <Redirect to="/" />
            }
          />
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
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    provider: state.provider,
    isDrawerOpen: state.ui.isDrawerOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeSideDrawer: () => dispatch(closeSideDrawer())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

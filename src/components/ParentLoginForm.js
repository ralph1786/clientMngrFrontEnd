import React, { Component } from "react";
import "./ParentLoginForm.scss";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { loginParent } from "../actions/authActions";
import Message from "./Message";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.loginParent(this.state);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="parent-login animated flipInY">
        <h1>{<Message />} Parent</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          <br />
          <button>Log In</button>
        </form>
        <Link to="/parent_sign">Register</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    parent: state.provider.parent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginParent: parentObj => dispatch(loginParent(parentObj))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);

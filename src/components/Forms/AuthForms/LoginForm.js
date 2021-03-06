import React, { Component } from "react";
import "./LoginForm.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginProvider } from "../../../actions/authActions";
import Message from "../../UX/Message";

export class LoginForm extends Component {
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
    this.props.loginProvider(this.state);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="login animated flipInY">
        <h1>{<Message />} Provider</h1>
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
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);

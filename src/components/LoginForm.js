import React, { Component } from "react";
import "./LoginForm.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginProvider } from "../actions/authActions";

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
    this.props.loginProvider(this.state);
  };

  render() {
    // console.log(this.props.provider);
    return (
      <div className="login animated flipInY">
        <h1>Welcome Provider</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />
          <br />
          <label>Password</label>
          <input
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);

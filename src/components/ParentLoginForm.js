import React, { Component } from "react";
import "./ParentLoginForm.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginParent } from "../actions/authActions";

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
  };

  render() {
    // console.log(this.props.parent);
    return (
      <div className="parent-login animated flipInY">
        <h1>Welcome Parent</h1>
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

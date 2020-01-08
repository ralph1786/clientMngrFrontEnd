import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createParent } from "../../actions/parentActions";
import Modal from "react-modal";
import "./ParentSignUp.scss";

export class ParentSignUp extends Component {
  state = {
    isModalOpen: true,
    name: "",
    username: "",
    password: ""
  };

  componentWillMount() {
    Modal.setAppElement("body");
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  goBack = () => {
    this.props.history.push("/parent_login");
  };

  handleSubmit = e => {
    e.preventDefault();
    const parentObj = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password
    };
    this.props.createParent(parentObj);
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.state.isModalOpen} style={customStyles}>
          <div className="parent-sign">
            <span onClick={this.goBack}>X</span>
            <form onSubmit={this.handleSubmit}>
              <h4>Register</h4>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
              <br />
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
              <button>Register</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    padding: "30px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    height: "300px",
    width: "550px",
    webkitboxShadow: "11px 10px 44px 4px rgba(0,0,0,0.75)",
    mozboxShadow: "11px 10px 44px 4px rgba(0,0,0,0.75)",
    boxShadow: "11px 10px 44px 4px rgba(0,0,0,0.75)",
    borderRadius: "15px",
    backgroundColor: "rgb(137, 253, 214)",
    overflow: "hidden"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createParent: parentObj => dispatch(createParent(parentObj))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(ParentSignUp));

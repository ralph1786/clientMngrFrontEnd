import React, { Component } from "react";
import { Link } from "react-router-dom";
import { updateChild } from "../actions/childActions";
import { connect } from "react-redux";

class EditForm extends Component {
  state = {
    name: "",
    image: "",
    age: "",
    address: "",
    allergies: "",
    balance: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCreateSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.updateChild(this.state);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
        <br />
        <br />
        <form onSubmit={this.handleCreateSubmit}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Image Url</label>
          <input
            name="image"
            type="text"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Age</label>
          <input
            name="age"
            type="text"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Address</label>
          <input
            name="address"
            type="text"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Allergies</label>
          <input
            name="allergies"
            type="text"
            value={this.state.allergies}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Balance</label>
          <input
            name="balance"
            type="text"
            value={this.state.balance}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Edit Child" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateChild: childObj => dispatch(updateChild(childObj))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditForm);

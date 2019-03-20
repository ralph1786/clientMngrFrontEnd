import React, { Component } from "react";
import { Link } from "react-router-dom";
import { newChild } from "../actions/childActions";
import { connect } from "react-redux";

class CreateForm extends Component {
  state = {
    name: "",
    image: "",
    age: "",
    address: "",
    allergies: "",
    balance: "",
    provider_id: 0,
    parent_id: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCreateSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.newChild(this.state);
  };

  render() {
    // console.log(this.props);
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
          <label>Provider ID</label>
          <input
            name="provider_id"
            type="number"
            value={this.state.provider_id}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Parent ID</label>
          <input
            name="parent_id"
            type="number"
            value={this.state.parent_id}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Create Child" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newChild: childInfo => dispatch(newChild(childInfo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateForm);

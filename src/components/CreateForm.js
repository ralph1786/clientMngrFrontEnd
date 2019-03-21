import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { newChild } from "../actions/childActions";
import { connect } from "react-redux";
import "./CreateForm.scss";

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

  // selectedFileHandler = e => {
  //   console.log(e.target.files[0]);
  //   this.setState({
  //     selectedFile: e.target.files[0]
  //   });
  // };

  render() {
    // console.log(this.props);
    return (
      <div>
        <Link to="/dashboard">
          <button id="button-create">Dashboard</button>
        </Link>
        <br />
        <br />
        <div className="create-form animated flipInY">
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
            {/* <input
              type="file"
              name="file"
              onChange={this.selectedFileHandler}
            /> */}
            <input type="submit" value="Create Child" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    provider: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newChild: childInfo => dispatch(newChild(childInfo))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateForm)
);

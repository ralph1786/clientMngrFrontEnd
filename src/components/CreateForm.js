import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import { newChild } from "../actions/childActions";
import { createChild } from "../actions/childActions";
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
    parent_id: 0,
    forms: null
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFilesChange = e => {
    this.setState({
      forms: e.target.files
    });
  };

  handleCreateSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    // this.props.newChild(this.state);
    const data = new FormData();
    for (let key in this.state) {
      if (key === "forms") {
        for (let form of this.state.forms) {
          data.append("forms[]", form);
        }
      } else {
        data.append(key, this.state[key]);
      }
    }
    fetch("http://localhost:80/api/v1/children", {
      method: "POST",
      body: data
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

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
            <input
              name="forms"
              type="file"
              multiple
              onChange={this.handleFilesChange}
            />
            <br />
            <br />
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
    newChild: childInfo => dispatch(createChild(childInfo))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateForm)
);

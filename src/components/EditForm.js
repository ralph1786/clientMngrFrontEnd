import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { updateChild } from "../actions/editActions";
import { connect } from "react-redux";
import "./EditForm.scss";

class EditForm extends Component {
  state = {
    id: this.props.editChild.id,
    name: this.props.editChild.name,
    image: this.props.editChild.image,
    age: this.props.editChild.age,
    address: this.props.editChild.address,
    allergies: this.props.editChild.allergies,
    balance: this.props.editChild.balance
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
    // console.log(this.state);
    return (
      <React.Fragment>
        <Link to="/dashboard">
          <button id="button-edit">Dashboard</button>
        </Link>
        <div className="edit-form animated flipInY">
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    editChild: state.editChild
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateChild: childObj => dispatch(updateChild(childObj))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditForm)
);

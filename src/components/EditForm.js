import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { updateChild } from "../actions/editActions";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import CancelButton from "./CancelButton";
import "./EditForm.scss";

export class EditForm extends Component {
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

  handleEditSubmit = e => {
    e.preventDefault();
    this.props.updateChild(this.state);
    toast.warning(`${this.state.name} was edited!`, {
      position: toast.POSITION.BOTTOM_CENTER
    });
    if (this.props.location.pathname === "/edit") {
      this.props.history.push("/dashboard");
    } else {
      this.props.history.push("parent_dashboard");
    }
  };

  render() {
    return (
      <Fragment>
        <div className="edit-form animated flipInY">
          <form onSubmit={this.handleEditSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="profile image">Profile Image</label>
            <input
              id="profile image"
              name="image"
              type="text"
              value={this.state.image}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="age">Age</label>
            <input
              id="age"
              name="age"
              type="text"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="allergies">Allergies</label>
            <input
              id="allergies"
              name="allergies"
              type="text"
              value={this.state.allergies}
              onChange={this.handleChange}
            />
            <br />
            <br />
            {this.props.location.pathname === "/edit_parent" ? (
              " "
            ) : (
              <Fragment>
                <label htmlFor="balance">Balance</label>
                <input
                  id="balance"
                  name="balance"
                  type="text"
                  value={this.state.balance}
                  onChange={this.handleChange}
                />
                <br />
                <br />
              </Fragment>
            )}
            <button>Edit Child</button>
            <CancelButton pathname={this.props.location.pathname} />
          </form>
        </div>
      </Fragment>
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

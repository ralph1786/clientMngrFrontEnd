import React, { Component, Fragment } from "react";

import { withRouter } from "react-router-dom";
import { updateChild } from "../../actions/editActions";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import CancelButton from "../UI/CancelButton";
import LabelInput from "./LabelInput";

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
      <div className="edit-form animated flipInY">
        <form onSubmit={this.handleEditSubmit}>
          <LabelInput
            labelName="Name"
            name="name"
            inputType="text"
            value={this.state.name}
            changeHandler={this.handleChange}
          />
          <LabelInput
            labelName="Profile Image"
            name="image"
            inputType="text"
            value={this.state.image}
            changeHandler={this.handleChange}
          />
          <LabelInput
            labelName="Age"
            name="age"
            inputType="text"
            value={this.state.age}
            changeHandler={this.handleChange}
          />
          <LabelInput
            labelName="Address"
            name="address"
            inputType="text"
            value={this.state.address}
            changeHandler={this.handleChange}
          />
          <LabelInput
            labelName="Allergies"
            name="allergies"
            inputType="text"
            value={this.state.allergies}
            changeHandler={this.handleChange}
          />
          {this.props.location.pathname === "/edit_parent" ? (
            " "
          ) : (
            <Fragment>
              <LabelInput
                labelName="Balance"
                name="balance"
                inputType="text"
                value={this.state.balance}
                changeHandler={this.handleChange}
              />
            </Fragment>
          )}
          <button>Edit Child</button>
          <CancelButton pathname={this.props.location.pathname} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editChild: state.editChild.childToEdit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateChild: childObj => dispatch(updateChild(childObj))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditForm)
);

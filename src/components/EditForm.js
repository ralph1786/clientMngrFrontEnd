import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { updateChild } from "../actions/editActions";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import CancelButton from "./CancelButton";
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
      <React.Fragment>
        <div className="edit-form animated flipInY">
          <form onSubmit={this.handleEditSubmit}>
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
            {this.props.location.pathname === "/edit_parent" ? (
              " "
            ) : (
              <React.Fragment>
                <label>Balance</label>
                <input
                  name="balance"
                  type="text"
                  value={this.state.balance}
                  onChange={this.handleChange}
                />
                <br />
                <br />
              </React.Fragment>
            )}
            <button>Edit Child</button>
            <CancelButton pathname={this.props.location.pathname} />
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

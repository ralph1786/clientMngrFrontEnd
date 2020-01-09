import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { createChild } from "../../actions/childActions";
import { connect } from "react-redux";
import "./CreateForm.scss";
import { toast } from "react-toastify";
import { setProvider } from "../../actions/authActions";
import ParentSelect from "../ParentSelect";
import CancelButton from "../UI/CancelButton";
import LabelInput from "./LabelInput";

export class CreateForm extends Component {
  state = {
    name: "",
    image: "",
    age: "",
    address: "",
    allergies: "",
    balance: "",
    provider_id: 0,
    parent_id: 1,
    forms: null
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    let token = localStorage.token;
    if (token) {
      fetch("http://localhost:80/api/v1/dashboard", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            return <Redirect to="/login" />;
          } else {
            this.props.setProvider(res.provider);
            this.setState({
              provider_id: res.provider.id
            });
          }
        })
        .catch(err => console.log(err));
    }
  }

  handleFilesChange = e => {
    this.setState({
      forms: e.target.files
    });
  };

  handleCreateSubmit = e => {
    e.preventDefault();
    if (
      Object.values(this.state).includes("") ||
      Object.values(this.state).includes(null)
    ) {
      toast.error("All Fields Required!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000
      });
      return;
    }
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
      .then(res => {
        toast.success("Successfully created!", {
          position: toast.POSITION.BOTTOM_CENTER
        });
        this.props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="create-form animated flipInY">
        <form onSubmit={this.handleCreateSubmit}>
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
          <LabelInput
            labelName="Balance"
            name="balance"
            inputType="text"
            value={this.state.balance}
            changeHandler={this.handleChange}
          />
          <label>Parent</label>
          <ParentSelect
            name="parent_id"
            value={this.state.parent_id}
            handleSelectChange={this.handleChange}
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
          <button>Create Child</button>
          <CancelButton pathname={this.props.history.location.pathname} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    provider: state.provider
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newChild: childInfo => dispatch(createChild(childInfo)),
    setProvider: providerObj => dispatch(setProvider(providerObj))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateForm)
);

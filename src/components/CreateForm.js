import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
// import { newChild } from "../actions/childActions";
import { createChild } from "../actions/childActions";
import { connect } from "react-redux";
import "./CreateForm.scss";
import { toast } from "react-toastify";
import { setProvider } from "../actions/authActions";

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
          console.log(res.provider);
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
        console.log(res);
        toast.success("Successfully created!", {
          position: toast.POSITION.BOTTOM_CENTER
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.props.provider.provider);
    console.log(this.state.provider_id);
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
            <input
              style={{ outline: "none" }}
              type="submit"
              value="Create Child"
            />
          </form>
        </div>
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateForm)
);

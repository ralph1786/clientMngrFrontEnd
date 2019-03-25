import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { newChild } from "../actions/childActions";
import { connect } from "react-redux";
import ActiveStorageProvider, {
  DirectUploadProvider
} from "react-activestorage-provider";
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
            <ActiveStorageProvider
              endpoint={{
                path: "api/v1/children",
                model: "Child",
                attribute: "forms",
                method: "POST",
                host: "1b61a5ad.ngrok.io"
              }}
              multiple={true}
              onSubmit={data => console.log(data)}
              render={({ handleUpload, uploads, ready }) => (
                <div>
                  <input
                    type="file"
                    disabled={!ready}
                    onChange={e => handleUpload(e.currentTarget.files)}
                  />
                  {uploads.map(upload => {
                    switch (upload.state) {
                      case "waiting":
                        return (
                          <p key={upload.id}>
                            Waiting to upload {upload.file.name}
                          </p>
                        );
                      case "uploading":
                        return (
                          <p key={upload.id}>
                            Uploading {upload.file.name}: {upload.progress}%
                          </p>
                        );
                      case "error":
                        return (
                          <p key={upload.id}>
                            Error uploading {upload.file.name}: {upload.error}
                          </p>
                        );
                      case "finished":
                        return (
                          <p key={upload.id}>
                            Finished uploading {upload.file.name}
                          </p>
                        );
                      default:
                        return;
                    }
                  })}
                </div>
              )}
            />
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

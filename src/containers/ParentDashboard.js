import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { addParent } from "../actions/authActions";
import ChildCard from "../components/ChildCard";
import "./ParentDashboard.scss";

class ParentDashboard extends Component {
  componentDidMount() {
    let token = localStorage.token;
    fetch("http://localhost:80/api/v1//parent_dashboard", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.parent);
        if (res.error) {
          return <Redirect to="/login" />;
        } else {
          this.props.addParent(res.parent);
        }
      })
      .catch(err => console.log(err));
  }

  renderChildren = () => {
    console.log(this.props.parent);
    if (this.props.parent.children !== undefined) {
      let myChildren = this.props.parent.children.map(child => (
        <ChildCard key={child.id} child={child} />
      ));
      return myChildren;
    }
  };

  render() {
    return (
      <div className="parent-dashboard">
        <h2>Hello, {this.props.parent.name}</h2>
        {this.renderChildren()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    parent: state.provider.parent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addParent: parentObj => dispatch(addParent(parentObj))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ParentDashboard)
);

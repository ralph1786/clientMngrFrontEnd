import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { addParent } from "../actions/authActions";
import ChildCard from "../components/ChildCard";
import "./ParentDashboard.scss";

class ParentDashboard extends Component {
  componentDidMount() {
    let token = localStorage.token;
    if (token) {
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
  }

  renderChildren = () => {
    // console.log(this.props.parent);
    if (
      this.props.parent.children !== undefined &&
      this.props.parent.children.length > 0
    ) {
      let myChildren = this.props.parent.children.map(child => (
        <ChildCard key={child.id} child={child} />
      ));
      return myChildren;
    } else {
      return (
        <h2 style={{ position: "absolute", top: "40%", left: "34%" }}>
          No children to display at this time, comeback later.{" "}
        </h2>
      );
    }
  };

  render() {
    return (
      <div>
        <div />
        <br />
        <br />
        <div>
          <h1>Welcome, {this.props.parent.name}</h1>
        </div>
        <br />
        <br />
        <div className="parent-dashboard">{this.renderChildren()}</div>
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

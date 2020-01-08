import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { addParent } from "../actions/authActions";
import ChildCard from "../components/ChildCard";
import "./ParentDashboard.scss";
import Message from "../components/UX/Message";

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
          No children to display at this time, comeback later.
        </h2>
      );
    }
  };

  render() {
    return (
      <Fragment>
        <div />
        <br />
        <br />
        <h1>
          {<Message />}
          {this.props.parent.name}
        </h1>
        <ul className="parent-dashboard">{this.renderChildren()}</ul>
      </Fragment>
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
  connect(mapStateToProps, mapDispatchToProps)(ParentDashboard)
);

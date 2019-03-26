import React, { Component } from "react";
import ChildrenList from "./ChildrenList";
import "./Dashboard.scss";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setProvider } from "../actions/authActions";

class Dashboard extends Component {
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
          }
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    // console.log(this.props.provider);
    return (
      <div className="dashboard">
        <Link to="/create">
          <button>New Child</button>
        </Link>
        <ChildrenList />
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
    setProvider: providerObj => dispatch(setProvider(providerObj))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);

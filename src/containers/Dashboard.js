import React, { Component } from "react";
import ChildrenList from "./ChildrenList";
import "./Dashboard.scss";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends Component {
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

export default withRouter(connect(mapStateToProps)(Dashboard));

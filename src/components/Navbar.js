import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import LogOut from "./LogOut";
import "./Navbar.scss";

const Navbar = props => {
  console.log(props);
  return (
    <div className="navbar">
      <Link to="/">
        <h2>daycareMngr</h2>
      </Link>

      {props.location.pathname === "/edit" ||
      props.location.pathname === "/create" ? (
        <div
          className={
            props.location.pathname === "/edit"
              ? "dashboard-button-edit-form"
              : "dashboard-button"
          }
        >
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        </div>
      ) : null}

      {props.location.pathname === "/edit_parent" ? (
        <div className="parent-dashboard">
          <Link to="/parent_dashboard">
            <button>Dashboard</button>
          </Link>
        </div>
      ) : null}

      {props.location.pathname === "/dashboard" ||
      props.location.pathname === "/edit" ? (
        <div className="create-button">
          <Link to="/create">
            <button>New Child</button>
          </Link>
        </div>
      ) : null}
      <span>
        {localStorage.getItem("token") &&
        localStorage.getItem("token") !== undefined ? (
          <LogOut />
        ) : (
          ""
        )}
      </span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    provider: state.provider.provider
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));

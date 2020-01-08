import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LogOut from "../LogOut";
import { connect } from "react-redux";
import { openSideDrawer, closeSideDrawer } from "../../actions/uiActions";

export const NavbarMenu = props => {
  return (
    <Fragment>
      {props.pathname === "/edit" || props.pathname === "/create" ? (
        <div
          className={
            props.pathname === "/edit"
              ? "dashboard-button-edit-form"
              : "dashboard-button"
          }
        >
          <Link to="/dashboard">
            <button onClick={props.closeSideDrawer}>Dashboard</button>
          </Link>
        </div>
      ) : null}

      {props.pathname === "/edit_parent" ? (
        <div className="parent-dashboard">
          <Link to="/parent_dashboard">
            <button onClick={props.closeSideDrawer}>Dashboard</button>
          </Link>
        </div>
      ) : null}

      {props.pathname === "/dashboard" || props.pathname === "/edit" ? (
        <div className="create-button">
          <Link to="/create">
            <button onClick={props.closeSideDrawer}>New Child</button>
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
        {props.pathname === "/" ||
        props.pathname === "/login" ||
        props.pathname === "/parent_login" ||
        props.parent === "SideDrawer" ? null : (
          <button className="menu-icon" onClick={props.openSideDrawer}>
            <i className="fas fa-bars fa-2x" />
          </button>
        )}
      </span>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    openSideDrawer: () => dispatch(openSideDrawer()),
    closeSideDrawer: () => dispatch(closeSideDrawer())
  };
};

export default connect(null, mapDispatchToProps)(NavbarMenu);

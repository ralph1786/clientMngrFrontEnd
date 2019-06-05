import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./SideDrawer.scss";
import NavbarMenu from "./NavbarMenu";
import { openSideDrawer, closeSideDrawer } from "../actions/uiActions";

const SideDrawer = props => {
  return (
    <div
      className={props.isDrawerOpen ? "side-drawer-open" : "side-drawer-closed"}
    >
      <button className="drawer_close_btn" onClick={props.closeSideDrawer}>
        <i className="fas fa-window-close fa-2x" />
      </button>
      <NavbarMenu pathname={props.location.pathname} parent="SideDrawer" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isDrawerOpen: state.ui.isDrawerOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openSideDrawer: () => dispatch(openSideDrawer()),
    closeSideDrawer: () => dispatch(closeSideDrawer())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideDrawer)
);

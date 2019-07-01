import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./SideDrawer.scss";
import NavbarMenu from "./NavbarMenu";
import { openSideDrawer, closeSideDrawer } from "../actions/uiActions";
import SearchBar from "./SearchBar";
import { searchWord } from "../actions/childActions";

const SideDrawer = props => {
  const changeHandler = e => {
    props.searchTerm(e.target.value);
  };

  return (
    <div
      className={props.isDrawerOpen ? "side-drawer-open" : "side-drawer-closed"}
    >
      <button className="drawer_close_btn" onClick={props.closeSideDrawer}>
        <i className="fas fa-window-close fa-2x" />
      </button>
      {props.location.pathname === "/dashboard" ? (
        <div className="side-drawer-search">
          <SearchBar
            searchWord={props.searchWord}
            onChange={e => changeHandler(e)}
          />
        </div>
      ) : null}
      <NavbarMenu pathname={props.location.pathname} parent="SideDrawer" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isDrawerOpen: state.ui.isDrawerOpen,
    searchWord: state.children.searchWord
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openSideDrawer: () => dispatch(openSideDrawer()),
    closeSideDrawer: () => dispatch(closeSideDrawer()),
    searchTerm: word => dispatch(searchWord(word))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideDrawer)
);

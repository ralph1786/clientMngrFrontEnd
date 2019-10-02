import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removeProvider } from "../actions/authActions";
import { removeParent } from "../actions/authActions";
import { closeSideDrawer } from "../actions/uiActions";

const removeProviderEnhanced = props => {
  props.removeProvider();
  props.closeSideDrawer();
};

const removeParentEnhanced = props => {
  props.removeParent();
  props.closeSideDrawer();
};

const renderButton = props => {
  if (props.parent.provider) {
    return (
      <button onClick={() => removeProviderEnhanced(props)}>Logout</button>
    );
  } else if (props.parent.parent) {
    return <button onClick={() => removeParentEnhanced(props)}>Logout</button>;
  }
};

const LogOut = props => {
  return <Fragment>{renderButton(props)}</Fragment>;
};

const mapStateToProps = state => {
  return {
    parent: state.provider
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProvider: providerObj => dispatch(removeProvider(providerObj)),
    removeParent: parentObj => dispatch(removeParent(parentObj)),
    closeSideDrawer: () => dispatch(closeSideDrawer())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LogOut)
);

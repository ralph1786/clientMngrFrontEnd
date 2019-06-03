import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removeProvider } from "../actions/authActions";
import { removeParent } from "../actions/authActions";

const renderButton = props => {
  if (props.parent.provider) {
    return <button onClick={() => props.removeProvider()}>Logout</button>;
  } else if (props.parent.parent) {
    return <button onClick={() => props.removeParent()}>Logout</button>;
  }
};

const LogOut = props => {
  return <div>{renderButton(props)}</div>;
};

const mapStateToProps = state => {
  return {
    parent: state.provider
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProvider: providerObj => dispatch(removeProvider(providerObj)),
    removeParent: parentObj => dispatch(removeParent(parentObj))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LogOut)
);

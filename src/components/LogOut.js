import React from "react";
import { connect } from "react-redux";
import { removeProvider } from "../actions/authActions";
import { removeParent } from "../actions/authActions";

const LogOut = props => {
  console.log(props.user);
  return (
    <div>
      {props.user.provider ? (
        <button onClick={() => props.removeProvider()}>Logout</button>
      ) : (
        <button onClick={() => props.removeParent()}>Logout</button>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeProvider: providerObj => dispatch(removeProvider(providerObj)),
    removeParent: parentObj => dispatch(removeParent(parentObj))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LogOut);

import React from "react";
import { connect } from "react-redux";
import { removeProvider } from "../actions/authActions";

const LogOut = props => {
  //   console.log(props);
  return (
    <div>
      <button onClick={() => props.removeProvider()}>Logout</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeProvider: providerObj => dispatch(removeProvider(providerObj))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LogOut);

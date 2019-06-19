import React from "react";
import { connect } from "react-redux";
import { deleteChild } from "../actions/childActions";
import { selectedChild } from "../actions/editActions";
import { Link, withRouter } from "react-router-dom";
import "./ChildCard.scss";

const ChildCard = props => {
  const { name, age, image, address, allergies, balance } = props.child;
  return (
    <div className="child-card animated fadeInUp">
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <img src={image} alt="children" />
      <address>Address: {address}</address>
      <p>Allergies: {allergies}</p>
      <p>Balance: ${balance}</p>
      {props.location.pathname === "/dashboard" ? (
        <Link to="/edit">
          <button onClick={() => props.selectedChild(props.child)}>Edit</button>
        </Link>
      ) : (
        <Link to="/edit_parent">
          <button onClick={() => props.selectedChild(props.child)}>Edit</button>
        </Link>
      )}
      {props.location.pathname === "/parent_dashboard" ? (
        <Link to="/payment_modal">
          <button
            id="make_payment"
            style={{
              outline: "none"
            }}
            onClick={() => props.selectedChild(props.child)}
          >
            Payment
          </button>
        </Link>
      ) : (
        <button onClick={() => props.deleteChild(props.child.id)}>
          Remove
        </button>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    editChild: state.editChild
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteChild: id => dispatch(deleteChild(id)),
    selectedChild: childObj => dispatch(selectedChild(childObj))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChildCard)
);

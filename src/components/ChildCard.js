import React from "react";
import { connect } from "react-redux";
import { deleteChild } from "../actions/childActions";
import { Link, withRouter } from "react-router-dom";
import "./ChildCard.scss";

const ChildCard = props => {
  // console.log(props.child);
  const { name, age, image, address, allergies, balance } = props.child;
  return (
    <div className="child-card animated fadeInUp">
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <img src={image} alt="children" />
      <address>Address: {address}</address>
      <p>Allergies: {allergies}</p>
      <p>Balance: ${balance}</p>
      <Link to="/edit">
        <button>Edit</button>
      </Link>
      <button onClick={() => props.deleteChild(props.child.id)}>Delete</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteChild: id => dispatch(deleteChild(id))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ChildCard)
);

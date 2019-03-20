import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Buttons = () => {
  return (
    <div className="button">
      <Link to="/login">
        <button className="btn-hover color-1">Provider</button>
      </Link>
      <Link to="/">
        <button className="btn-hover color-1">Parent</button>
      </Link>
    </div>
  );
};

export default Buttons;

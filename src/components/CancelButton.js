import React from "react";
import { Link } from "react-router-dom";

const CancelButton = props => {
  return (
    <div>
      {props.pathname === "/edit" ? (
        <Link to="/dashboard">
          <button className="cancel-button">Cancel</button>
        </Link>
      ) : (
        <Link to="/parent_dashboard">
          <button className="cancel-button">Cancel</button>
        </Link>
      )}
    </div>
  );
};

export default CancelButton;

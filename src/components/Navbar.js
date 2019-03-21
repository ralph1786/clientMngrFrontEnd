import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import "./Navbar.css";

const Navbar = props => {
  // console.log(props);
  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="https://i.pinimg.com/originals/17/5d/67/175d6717fa33b624afc4664d76376370.jpg"
          alt="logo"
        />
      </Link>
      {/* <span>{Object.keys(props.provider).length > 0 ? <LogOut /> : ""}</span> */}
      <span>
        {localStorage.getItem("token") ? <LogOut user={props} /> : ""}
      </span>
      {/* <button onClick={() => localStorage.removeItem("token")}>
        clear localStorage
      </button> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    provider: state.provider.provider
  };
};

export default connect(mapStateToProps)(Navbar);

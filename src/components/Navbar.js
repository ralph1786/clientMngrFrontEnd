import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import LogOut from "./LogOut";
import "./Navbar.css";

const Navbar = props => {
  return (
    <div className="navbar">
      <Link to="/">
        {/* <img
          src="https://i.pinimg.com/originals/17/5d/67/175d6717fa33b624afc4664d76376370.jpg"
          alt="logo"
        /> */}
        <h2>daycareMngr</h2>
      </Link>
      <span>
        {localStorage.getItem("token") &&
        localStorage.getItem("token") !== undefined ? (
          <LogOut />
        ) : (
          ""
        )}
      </span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    provider: state.provider.provider
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));

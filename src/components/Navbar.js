import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.scss";
import NavbarMenu from "./NavbarMenu";

const Navbar = props => {
  console.log(props);
  return (
    <div className="navbar">
      <Link to="/">
        <h2>daycareMngr</h2>
      </Link>

      <NavbarMenu pathname={props.location.pathname} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    provider: state.provider.provider
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));

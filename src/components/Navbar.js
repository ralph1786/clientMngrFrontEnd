import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.scss";
import NavbarMenu from "./NavbarMenu";
import SearchBar from "./SearchBar";
import { searchWord } from "../actions/childActions";

const Navbar = props => {
  const changeHandler = e => {
    props.searchTerm(e.target.value);
  };

  return (
    <nav className={props.scrolled ? "navbar-scroll" : "navbar"}>
      <Link to="/">
        <h2>daycareMngr</h2>
      </Link>

      {props.location.pathname === "/dashboard" && props.scrolled ? (
        <div className="navbar-search-input">
          <SearchBar
            searchWord={props.searchWord}
            onChange={e => changeHandler(e)}
          />
        </div>
      ) : null}

      <NavbarMenu pathname={props.location.pathname} />
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    provider: state.provider.provider,
    searchWord: state.children.searchWord
  };
};

const mapDispatchToProps = dispatch => ({
  searchTerm: word => dispatch(searchWord(word))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
);

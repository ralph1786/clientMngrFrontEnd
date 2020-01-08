import React, { Fragment } from "react";
import "./SearchBar.scss";

const SearchBar = props => {
  return (
    <Fragment>
      <input
        className="search-input"
        type="text"
        value={props.searchWord}
        onChange={props.onChange}
        placeholder="Search Child"
      />
      <span className="search-input-icon">
        <i className="fas fa-search fa-lg" />
      </span>
    </Fragment>
  );
};

export default SearchBar;

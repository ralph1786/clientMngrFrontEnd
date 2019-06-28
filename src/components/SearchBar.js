import React from "react";
import "./SearchBar.scss";

const SearchBar = props => {
  return (
    <div>
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
    </div>
  );
};

export default SearchBar;

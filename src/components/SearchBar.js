import React from "react";

const SearchBar = props => {
  return (
    <div>
      <input
        type="text"
        value={props.searchWord}
        onChange={props.onChange}
        placeholder="Search Child"
      />
    </div>
  );
};

export default SearchBar;

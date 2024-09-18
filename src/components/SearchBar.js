import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by title..."
      onChange={(e) => onSearch(e.target.value)}
      style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
    />
  );
};

export default SearchBar;

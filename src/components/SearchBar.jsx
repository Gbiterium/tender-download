import React from 'react';
import { IoSearch } from "react-icons/io5";
const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-bar mb-3">
      <IoSearch className="search-icon" />
      <input
        type="text"
        className="form-control"
        placeholder="Search tenders..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;

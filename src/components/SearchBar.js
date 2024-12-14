import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ placeholder, data, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    onSearch(filteredData);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;

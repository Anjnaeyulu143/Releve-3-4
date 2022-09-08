import React from "react";
import "../styles/SearchBar.css";
import { Link } from "react-router-dom";

function SearchBar() {
  return (
    <div className="searchBar">
      <input list="sources" type="text" placeholder="Source" />
      <datalist id="sources">
        <option value="Lucknow" />
        <option value="Sublocation 1 (Lucknow)" />
        <option value="Sublocation 2 (Lucknow)" />
        <option value="Sublocation 3 (Lucknow)" />
        <option value="Sublocation 4 (Lucknow)" />
      </datalist>

      <input type="text" list="destinations" placeholder="Destination" />
      <datalist id="destinations">
        <option value="Haidargarh" />
        <option value="Sublocation 1 (Haidargarh)" />
        <option value="Sublocation 2 (Haidargarh)" />
        <option value="Sublocation 3 (Haidargarh)" />
        <option value="Sublocation 4 (Haidargarh)" />
      </datalist>

      <input type="date" placeholder="dd/mm/yyyy" />
      <button>
        <Link to="/seat-booking">Search Bus</Link>
      </button>
    </div>
  );
}

export default SearchBar;

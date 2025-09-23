/* eslint-disable no-unused-vars */
import { useState } from "react";
import SearchIcon from "../assets/images/icon-search.svg";

const SearchCountryInput = () => {
  const [query, setQuery] = useState(null);

  const handleChange = (e) => {
    if (e.target) {
      setQuery(e.target.value);
    }
  };

  return (
    <form className="search-form" action="">
      <div className="country-input">
        <img src={SearchIcon} alt="search icon" />
        <input
          aria-label="Search country"
          placeholder="Search for a place..."
          type="text"
          name="country"
          onChange={handleChange}
        />
      </div>
      <button className="btn">Search</button>
    </form>
  );
};
export default SearchCountryInput;

import { useEffect, useState } from "react";
import SearchIcon from "../assets/images/icon-search.svg";
import SearchDropdown from "./SearchDropdown";

const SearchCountryInput = ({ handleSelectedCountry }) => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.results) {
          setCountries(data.results);
        }
      });
  }, [query]);

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
      <SearchDropdown
        handleSelect={handleSelectedCountry}
        query={query}
        countries={countries}
      />
      <button className="btn">Search</button>
    </form>
  );
};
export default SearchCountryInput;

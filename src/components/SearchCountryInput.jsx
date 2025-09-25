import { useEffect, useState } from "react";
import SearchIcon from "../assets/images/icon-search.svg";
import SearchDropdown from "./SearchDropdown";

const SearchCountryInput = ({ handleSelectedCity }) => {
  const [query, setQuery] = useState("Accra");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.results) {
          setCities(data.results);
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
        handleSelectedCity={handleSelectedCity}
        query={query}
        cities={cities}
      />
      <button className="btn">Search</button>
    </form>
  );
};
export default SearchCountryInput;

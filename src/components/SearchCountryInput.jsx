import { useEffect, useRef, useState } from "react";
import SearchIcon from "../assets/images/icon-search.svg";
import SearchDropdown from "./SearchDropdown";

const SearchCountryInput = ({ handleSelectedCity }) => {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    if (!query) return;
    fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.results) {
          setCities(data.results);
        }
      })
      .catch((e) => console.log("Could not fetch suggestions", e.message));
  }, [query]);

  const handleChange = (e) => {
    if (e.target) {
      setQuery(e.target.value);
    }
    setShowSuggestions(false);
  };

  const handleSubmit = (formData) => {
    if (
      formData.get("city").trim().toLowerCase() == cities[0].name.toLowerCase()
    )
      handleSelectedCity(cities[0]);
    setShowSuggestions(true);
  };

  return (
    <form className="search-form" action={handleSubmit}>
      <div className="country-input">
        <img src={SearchIcon} alt="search icon" />
        <input
          aria-label="Search country"
          placeholder="Search for a place..."
          type="text"
          name="city"
          onChange={handleChange}
          ref={searchRef}
        />
      </div>
      <SearchDropdown
        query={query}
        handleSelectedCity={handleSelectedCity}
        cities={cities}
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
        inputRef={searchRef}
      />
      <button className="btn">Search</button>
    </form>
  );
};
export default SearchCountryInput;

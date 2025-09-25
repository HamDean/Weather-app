import { useState } from "react";

const SearchDropdown = ({ cities = [], handleSelectedCity, query }) => {
  const [showSuggestions, setShowSuggestions] = useState(true);

  if (!query || cities.length === 0) return null;

  return (
    <div className={`search-list ${!showSuggestions ? "hidden" : ""}`}>
      {cities.map((city) => (
        <span
          role="button"
          onClick={() => {
            handleSelectedCity(city);
            setShowSuggestions(false);
          }}
          key={city.id || city.name}
          className="city-option"
        >
          {city.name}
        </span>
      ))}
    </div>
  );
};

export default SearchDropdown;

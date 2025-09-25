
const SearchDropdown = ({ cities = [], handleSelectedCity, query, showSuggestions, setShowSuggestions, inputRef }) => {

  if (!query || cities.length === 0) return null;

  return (
    <div className={`search-list ${!showSuggestions ? "hidden" : ""}`}>
      {cities.map((city) => (
        <span
          role="button"
          onClick={() => {
            handleSelectedCity(city);
            setShowSuggestions(false);
            inputRef.current.value = ''
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

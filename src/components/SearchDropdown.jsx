
const SearchDropdown = ({ countries, query, handleSelect }) => {
  return (
    <div
      className={`search-list ${
        countries.length == 0 || query == "" ? "hidden" : ""
      }`}
    >
      {countries.map((country, index) => (
        <span onClick={() => handleSelect(country)} key={index}>
          {country.name}
        </span>
      ))}
    </div>
  );
};
export default SearchDropdown;

const SearchDropdown = ({ cities, query, handleSelectedCity }) => {
  return (
    <div
      className={`search-list ${
        cities.length == 0 || query == "Accra" ? "hidden" : ""
      }`}
    >
      {cities.map((city, index) => (
        <span onClick={() => handleSelectedCity(city)} key={index}>
          {city.name}
        </span>
      ))}
    </div>
  );
};
export default SearchDropdown;

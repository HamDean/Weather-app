// const cities = ["Accra", "Dubai", "New York", "Vancouver"];
const cities = []

const SearchDropdown = () => {
  return (
    <div className={`search-list ${cities.length == 0 ? 'hidden' : ''}`}>
      {cities.map((city, index) => (
        <span key={index}>{city}</span>
      ))}
    </div>
  );
};
export default SearchDropdown;

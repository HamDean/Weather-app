
const SearchDropdown = ({ countries, query}) => {
  return (
    <div className={`search-list ${countries.length == 0 || query == '' ? 'hidden' : ''}`}>
      {countries.map((country, index) => (
        <span key={index}>{country.name}</span>
      ))}
    </div>
  );
};
export default SearchDropdown;

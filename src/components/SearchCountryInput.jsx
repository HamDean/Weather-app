import { useEffect, useState } from "react";
import SearchIcon from "../assets/images/icon-search.svg";
import SearchDropdown from "./SearchDropdown";
import { fetchWeatherApi } from "openmeteo";

const SearchCountryInput = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

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

  useEffect(() => {
    const fetchForecast = async () => {
      if (selectedCountry) {
        const url = "https://api.open-meteo.com/v1/forecast";
        const params = {
          latitude: selectedCountry.latitude,
          longitude: selectedCountry.longitude,
          daily: ["temperature_2m_max", "apparent_temperature_max"],
          hourly: "temperature_2m",
          current: [
            "temperature_2m",
            "precipitation",
            "relative_humidity_2m",
            "wind_speed_10m",
          ],
          timezone: "Europe/London",
        };
        const responses = await fetchWeatherApi(url, params);
        console.log(responses[0]);
      }
    };

    fetchForecast()
  }, [selectedCountry]);

  const handleChange = (e) => {
    if (e.target) {
      setQuery(e.target.value);
    }
  };

  const handleSelect = (country) => {
    console.log(country);
    setSelectedCountry({
      latitude: country.latitude,
      longitude: country.longitude,
    });
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
        handleSelect={handleSelect}
        query={query}
        countries={countries}
      />
      <button className="btn">Search</button>
    </form>
  );
};
export default SearchCountryInput;

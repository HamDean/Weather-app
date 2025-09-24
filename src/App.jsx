import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SearchCountryInput from "./components/SearchCountryInput";
import WeatherInfo from "./components/WeatherInfo";
import Sunny from "./assets/images/icon-sunny.webp";
import WeatherDetailsList from "./components/WeatherDetailsList";
import { dummyDetails } from "./utils/constants";
import ForecastList from "./components/ForecastList";
import HourlyForecastSection from "./components/HourlyForecastSection";
import { useState, useEffect } from "react";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    if (selectedCountry) {
      const searchParams = new URLSearchParams({
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
      });

      fetch(`https://api.open-meteo.com/v1/forecast?${searchParams.toString()}`)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) =>
          console.error("Error fetching weather data:", error.message)
        );
    }
  }, [selectedCountry]);

  const handleSelectedCountry = (country) => {
    setSelectedCountry({
      latitude: country.latitude,
      longitude: country.longitude,
    });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchCountryInput handleSelectedCountry={handleSelectedCountry} />
        <article className="gen-forecast">
          <section id="weather-info">
            <WeatherInfo
              location={"Berlin, Germany"}
              date={"Tuesday, Aug 5, 2025"}
              icon={Sunny}
              temperature={72}
            />
            <WeatherDetailsList details={dummyDetails} />
            <ForecastList />
          </section>
          <HourlyForecastSection />
        </article>
      </main>
    </>
  );
};
export default App;

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SearchCountryInput from "./components/SearchCountryInput";
import WeatherInfo from "./components/WeatherInfo";
import Sunny from "./assets/images/icon-sunny.webp";
import WeatherDetailsList from "./components/WeatherDetailsList";
import ForecastList from "./components/ForecastList";
import HourlyForecastSection from "./components/HourlyForecastSection";
import { useState, useEffect } from "react";

const App = () => {
  const [selectedCity, setSelectedCity] = useState({
    latitude: 5.6037,
    longitude: -0.187,
    name: "Accra",
    country: "Ghana",
  });
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams({
      latitude: selectedCity.latitude,
      longitude: selectedCity.longitude,
      daily: ["temperature_2m_max", "temperature_2m_min", "weather_code"],
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
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) =>
        console.error("Error fetching weather data:", error.message)
      );
  }, [selectedCity]);

  const handleSelectedCity = (city) => {
    setSelectedCity({
      latitude: city.latitude,
      longitude: city.longitude,
      name: city.name,
      country: city.country,
    });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchCountryInput handleSelectedCity={handleSelectedCity} />
        <article className="gen-forecast">
          <section id="weather-info">
            <WeatherInfo
              location={`${selectedCity.name}, ${selectedCity.country}`}
              date={new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              icon={Sunny}
              temperature={weatherData?.current?.temperature_2m || "--"}
            />

            <WeatherDetailsList
              details={weatherData?.current}
              units={weatherData?.current_units}
            />
            <ForecastList weatherData={weatherData} />
          </section>
          <HourlyForecastSection />
        </article>
      </main>
    </>
  );
};
export default App;

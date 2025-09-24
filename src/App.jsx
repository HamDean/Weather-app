import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SearchCountryInput from "./components/SearchCountryInput";
import WeatherInfo from "./components/WeatherInfo";
import Sunny from "./assets/images/icon-sunny.webp";
import WeatherDetailsList from "./components/WeatherDetailsList";
import { dummyDetails } from "./utils/constants";
import ForecastList from "./components/ForecastList";
import HourlyForecastCard from "./components/HourlyForecastCard";
import HourlyForecastDropDown from "./components/HourlyForecastDropDown";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchCountryInput />
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
      </main>
    </>
  );
};
export default App;

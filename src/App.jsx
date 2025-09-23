import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SearchCountryInput from "./components/SearchCountryInput";
import WeatherInfo from "./components/WeatherInfo";
import Sunny from "./assets/images/icon-sunny.webp";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchCountryInput />
        <WeatherInfo
          location={"Berlin, Germany"}
          date={"Tuesday, Aug 5, 2025"}
          icon={Sunny}
          temperature={72}
        />
      </main>
    </>
  );
};
export default App;

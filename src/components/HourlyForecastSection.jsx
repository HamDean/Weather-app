import HourlyForecastCard from "./HourlyForecastCard";
import HourlyForecastDropDown from "./HourlyForecastDropDown";
import IconStorm from "../assets/images/icon-storm.webp";
import { useState } from "react";

const HourlyForecastSection = () => {
  const [selectedDay, setSelectedDay] = useState(
    new Date().toLocaleDateString("en-US", { weekday: "long" })
  );

  return (
    <section className="forecast-section">
      <header>
        <span>Hourly forecast</span>
        <HourlyForecastDropDown
          selectedDay={selectedDay}
          handleSelectedDay={setSelectedDay}
        />
      </header>
      <main>
        <HourlyForecastCard icon={IconStorm} temperature={56} time={"4 PM"} />
        <HourlyForecastCard icon={IconStorm} temperature={56} time={"4 PM"} />
        <HourlyForecastCard icon={IconStorm} temperature={56} time={"4 PM"} />
        <HourlyForecastCard icon={IconStorm} temperature={56} time={"4 PM"} />
        <HourlyForecastCard icon={IconStorm} temperature={56} time={"4 PM"} />
        <HourlyForecastCard icon={IconStorm} temperature={56} time={"4 PM"} />
        <HourlyForecastCard icon={IconStorm} temperature={56} time={"4 PM"} />
        <HourlyForecastCard icon={IconStorm} temperature={56} time={"4 PM"} />
      </main>
    </section>
  );
};
export default HourlyForecastSection;

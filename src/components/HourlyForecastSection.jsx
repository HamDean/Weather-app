import HourlyForecastCard from "./HourlyForecastCard";
import HourlyForecastDropDown from "./HourlyForecastDropDown";
import { useState } from "react";
import { weatherCodeToIcon } from "../utils/constants";

const HourlyForecastSection = ({ hourlyDetails }) => {
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
        {hourlyDetails?.time
          .map((time, index) => ({
            time,
            temp: hourlyDetails.temperature_2m[index],
            code: hourlyDetails.weather_code[index],
          }))
          .filter((entry) => {
            const date = new Date(entry.time);
            const hour = date.getHours();
            const day = date.toLocaleDateString("en-US", { weekday: "long" });
            return hour >= 15 && hour <= 22 && day == selectedDay;
          })
          .map((detail, index) => (
            <HourlyForecastCard
              key={index}
              icon={weatherCodeToIcon[detail.code]}
              temperature={Math.round(detail.temp)}
              time={`${new Date(detail.time).toLocaleTimeString("en-US", {
                hour: "numeric",
                hour12: "true",
              })}`}
            />
          ))}
      </main>
    </section>
  );
};
export default HourlyForecastSection;

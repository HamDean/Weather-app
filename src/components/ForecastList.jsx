import DailyForecast from "./DailyForecast";
import IconStorm from "../assets/images/icon-storm.webp";

const ForecastList = ({ weatherData }) => {
  return (
    <>
      <span style={{ fontSize: 20 }} className="forecast-title">
        Daily forecast
      </span>
      <div className="forecast-list">
        {weatherData?.daily?.time.map((time, index) => (
          <DailyForecast
            key={time}
            dayIcon={IconStorm}
            day={new Date(time).toLocaleDateString("en-US", {
              weekday: "short",
            })}
            min={Math.round(weatherData?.daily?.temperature_2m_min?.[index])}
            max={Math.round(weatherData?.daily?.temperature_2m_max?.[index])}
          />
        ))}
      </div>
    </>
  );
};
export default ForecastList;

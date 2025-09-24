import { dummyForecast } from "../utils/constants";
import DailyForecast from "./DailyForecast";
import IconStorm from "../assets/images/icon-storm.webp";

const ForecastList = () => {
  return (
    <>
      <span style={{fontSize: 20}} className="forecast-title">Daily forecast</span>
      <div className="forecast-list">
        {dummyForecast.map((cast, index) => (
          <DailyForecast
            key={index}
            dayIcon={IconStorm}
            day={cast.day}
            min={cast.min}
            max={cast.max}
          />
        ))}
      </div>
    </>
  );
};
export default ForecastList;

import WeatherInfoDetail from "./WeatherInfoDetail";

const WeatherDetailsList = ({ details, units }) => {
  return (
    <section className="details-list">
      <WeatherInfoDetail
        title={"Feels like"}
        value={details?.temperature_2m || "--"}
        unit={units?.temperature_2m}
      />
      <WeatherInfoDetail
        title={"Humidity"}
        value={details?.relative_humidity_2m || '--'}
        unit={units?.relative_humidity_2m}
      />
      <WeatherInfoDetail
        title={"Precipitation"}
        value={details?.precipitation || '--'}
        unit={units?.precipitation}
      />
      <WeatherInfoDetail
        title={"Wind Speed"}
        value={details?.wind_speed_10m || '--'}
        unit={units?.wind_speed_10m}
      />
    </section>
  );
};
export default WeatherDetailsList;

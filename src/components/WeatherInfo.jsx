
const WeatherInfo = ({ location, date, icon, temperature}) => {
  return (
    <section className="weather-info">
      <div className="location-container">
        <span className="location">{location}</span>
        <span className="date">{date}</span>
      </div>
      <div className="temperature-container">
        <div>
          <img src={icon} alt="Sunny" />
        </div>
        <span className="temperature">{temperature}°</span>
      </div>
    </section>
  );
};
export default WeatherInfo;

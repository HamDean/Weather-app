
const DailyForecast = ({ day, dayIcon, min, max }) => {
  return (
    <div className="day-forecast">
      <span>{day}</span>
      <img src={dayIcon} alt="Represation of the weather" />
      <div className="range">
        <span>{max}°</span>
        <span>{min}°</span>
      </div>
    </div>
  );
};
export default DailyForecast;

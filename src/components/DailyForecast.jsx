
const DailyForecast = ({ day, dayIcon, min, max }) => {
  return (
    <div className="day-forecast">
      <span>{day}</span>
      <img src={dayIcon} alt="Represation of the weather" />
      <div className="range">
        <span>{min}°</span>
        <span>{max}°</span>
      </div>
    </div>
  );
};
export default DailyForecast;

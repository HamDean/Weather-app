import IconFog from "../assets/images/icon-fog.webp";
const HourlyForecastCard = ({ icon, time, temperature }) => {
  return (
    <div className="hour-card">
      <div>
        <img
          src={icon}
          alt="Illustration of weather according to temperature"
        />
        <span>{time}</span>
      </div>
      <span>{temperature}°</span>
    </div>
  );
};
export default HourlyForecastCard;

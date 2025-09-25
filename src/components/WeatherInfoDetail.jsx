const WeatherInfoDetail = ({ title, value, unit }) => {
  return (
    <div className="detail-container">
      <span className="title">{title}</span>
      <span className="value">{value}{" "}{unit}</span>
    </div>
  );
};
export default WeatherInfoDetail;

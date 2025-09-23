const WeatherInfoDetail = ({ title, value }) => {
  return (
    <div className="detail-container">
      <span className="title">{title}</span>
      <span className="value">{value}</span>
    </div>
  );
};
export default WeatherInfoDetail;

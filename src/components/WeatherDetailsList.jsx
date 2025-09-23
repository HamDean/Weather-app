import WeatherInfoDetail from "./WeatherInfoDetail";

const WeatherDetailsList = ({details}) => {
  return (
    <section className="details-list">
      {details.map((detail, index) => (
        <WeatherInfoDetail
          key={index}
          title={detail.title}
          value={detail.value}
        />
      ))}
    </section>
  );
};
export default WeatherDetailsList;

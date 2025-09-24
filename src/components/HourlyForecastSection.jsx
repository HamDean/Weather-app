import HourlyForecastCard from "./HourlyForecastCard"
import HourlyForecastDropDown from "./HourlyForecastDropDown"
import IconStorm from '../assets/images/icon-storm.webp'

const HourlyForecastSection = () => {
  return (
    <section className="forecast-section">
        <header>
            <span>Hourly forecast</span>
            <HourlyForecastDropDown />
        </header>
        <main>
            <HourlyForecastCard icon={IconStorm} temperature={56}  time={'4 PM'}/>
            <HourlyForecastCard icon={IconStorm} temperature={56}  time={'4 PM'}/>
            <HourlyForecastCard icon={IconStorm} temperature={56}  time={'4 PM'}/>
            <HourlyForecastCard icon={IconStorm} temperature={56}  time={'4 PM'}/>
            <HourlyForecastCard icon={IconStorm} temperature={56}  time={'4 PM'}/>
            <HourlyForecastCard icon={IconStorm} temperature={56}  time={'4 PM'}/>
            <HourlyForecastCard icon={IconStorm} temperature={56}  time={'4 PM'}/>
            <HourlyForecastCard icon={IconStorm} temperature={56}  time={'4 PM'}/>
        </main>
    </section>
  )
}
export default HourlyForecastSection
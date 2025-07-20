import CityList from '../features/current-weather/components/city-list';
import { CurrentWeatherCard } from '../features/current-weather';
import { useCurrentWeather } from '../features/current-weather/hooks';
import './styles.scss';

export default function HomePage() {
  useCurrentWeather();

  return (
    <div className="wrapper">
      <div className="weather-card-wrapper">
        <CurrentWeatherCard />
      </div>
      <div className="city-list-wrapper">
        <CityList />
      </div>
    </div>
  );
}

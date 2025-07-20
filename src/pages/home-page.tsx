import CityList from '../features/current-weather/components/city-list';
import { CurrentWeatherCard } from '../features/current-weather';
import { useCurrentWeather } from '../features/current-weather/hooks';
import './styles.scss';

export default function HomePage() {
  useCurrentWeather();
  console.log('API key:', import.meta.env.VITE_WEATHER_API_KEY);
  console.log('API key:', import.meta.env.WEATHER_API_KEY);
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

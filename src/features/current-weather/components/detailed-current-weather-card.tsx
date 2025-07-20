import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { type RootState } from 'stores/store';

import WeatherIcon from './weather-icon';

import { HumidityIcon, MapMarkerIcon, PressureIcon, WindyIcon } from 'shared/ui';
import { useRoundedNumber, useTodaysDate } from 'shared/hooks';
import { useCurrentWeather } from '../hooks';
import '../styles/detailed-weather-card.style.scss';

export default function DetailedCurrentWeatherCard() {
  const { city } = useParams();
  const { currentWeather: weather } = useSelector((state: RootState) => state.currentWeather);

  const { dayOfWeek, formattedDate } = useTodaysDate();
  const temperature = useRoundedNumber(weather?.main.temp);
  const minTemp = useRoundedNumber(weather?.main.temp_min);
  const maxTemp = useRoundedNumber(weather?.main.temp_max);
  const feelsLikeTemp = useRoundedNumber(weather?.main.feels_like);

  useCurrentWeather(city);
  return (
    <div className="detailed-weather-card">
      <div className="detailed-weather-card-container">
        <div className="gradient-wrapper">
          <div className="detailed-weather-left-container">
            <div className="location-details">
              <div className="date-info">
                <p className="day">{dayOfWeek}</p>
                <p className="date">{formattedDate}</p>
              </div>
              <div className="location">
                <div className="location-icon">
                  <MapMarkerIcon size={30} />
                </div>
                <div className="location-info">
                  <p>
                    {weather?.city}, {weather?.country}
                  </p>
                </div>
              </div>
            </div>
            <div className="weather-details">
              <div className="wind">
                <div className="wind-icon">
                  <WindyIcon size={50} />
                </div>
                <div className="wind-info">
                  <p>{weather?.wind.speed} m/s</p>
                </div>
              </div>
              <div className="humidity">
                <div className="humidity-icon">
                  <HumidityIcon size={50} />
                </div>
                <div className="humidity-info">
                  <p>{weather?.main.humidity} %</p>
                </div>
              </div>
              <div className="pressure">
                <div className="pressure-icon">
                  <PressureIcon size={50} />
                </div>
                <div className="pressure-info">
                  <p>{weather?.main.pressure} mb</p>
                </div>
              </div>
            </div>
          </div>
          <div className="detailed-weather-center-container">
            <div className="weather-icon">
              <WeatherIcon weather={weather?.weather.main} size={340} />
            </div>
            <div className="weather-description">
              <p>{weather?.weather.main}</p>
            </div>
          </div>
          <div className="detailed-weather-right-container">
            <div className="temperature">
              <div className="temperature-container">
                <p>{temperature}</p>
                <span>&deg;</span>
              </div>
              <div className="horizontal-line" />
              <div className="temperature-min-max">
                <p>
                  {minTemp}
                  <span>&deg;</span>
                </p>{' '}
                <span>/</span>{' '}
                <p>
                  {maxTemp}
                  <span>&deg;</span>
                </p>
              </div>
            </div>
            <div className="temperature-feels-like">
              <p>Feels like {feelsLikeTemp}</p>
              <span>&deg;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

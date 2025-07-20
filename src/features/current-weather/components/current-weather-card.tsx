import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from 'stores/store';
import { addCityToSaved, getCurrentWeatherByCity } from '../services';

import WeatherIcon from './weather-icon';

import { MapMarkerIcon, RefreshIcon, SaveIcon, SearchIcon } from 'shared/ui';
import { useRoundedNumber, useTodaysDate } from 'shared/hooks';
import { ButtonIcon, SearchBar } from 'shared/components';
import useDeounce from 'shared/hooks/useDebounce';
import '../styles';
import { Link } from 'react-router';

export default function CurrentWeatherCard() {
  const [search, setSearch] = useState('');

  const dispatch = useAppDispatch();
  const { currentWeather: weather } = useSelector((state: RootState) => state.currentWeather);

  const { dayOfWeek, formattedDate } = useTodaysDate();
  const temperature = useRoundedNumber(weather?.main.temp);
  const debouncedSearch = useDeounce(search);

  const onRefreshClick = () => dispatch(getCurrentWeatherByCity(weather?.city ?? debouncedSearch));
  const onSaveClick = () => dispatch(addCityToSaved(weather?.city ?? debouncedSearch));
  const onSeachClick = () => debouncedSearch && dispatch(getCurrentWeatherByCity(debouncedSearch));

  return (
    <div className="weather-card">
      <div className="weather-card-container">
        <div className="weather-gradient">
          <div className="weather-action-container">
            <div className="action-container">
              <ButtonIcon children={<SearchIcon />} onClick={onSeachClick} />
            </div>
            <div className="action-container">
              <ButtonIcon children={<SaveIcon />} onClick={onSaveClick} />
              <ButtonIcon children={<RefreshIcon />} onClick={onRefreshClick} />
            </div>
          </div>
          <div className="weather-info-container">
            <div className="search-bar">
              <SearchBar search={search} setSearch={setSearch} />
            </div>
            <div className="top-content">
              <div className="date-info">
                <p className="day">{dayOfWeek}</p>
                <p className="date">{formattedDate}</p>
              </div>
              <div className="location">
                <div className="location-icon">
                  <MapMarkerIcon size={20} />
                </div>
                <div className="location-info">
                  <p>
                    {weather?.city}, {weather?.country}
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom-content">
              <div className="weather-icon-container">
                <WeatherIcon weather={weather?.weather.main} />
              </div>
              <div className="temperature">
                <p>{temperature}</p>
                <span>&deg;</span>
              </div>
              <div className="weather-condition">
                <p className="weather">{weather?.weather.main}</p>
                <Link to={`/${weather?.city}`}>See detailed info</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

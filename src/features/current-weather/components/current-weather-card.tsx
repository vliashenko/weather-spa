import { useSelector } from 'react-redux';
import { useCurrentWeather } from '../hooks';

import { Card } from 'shared/ui';
import type { RootState } from 'stores';

export default function CurrentWeatherCard() {
  useCurrentWeather();

  const state = useSelector((state: RootState) => state.currentWeather);

  return (
    <Card>
      <div className="info">
        <div className="city">{state.currentWeather?.city}</div>
        <div className="temp">{state.currentWeather?.main.temp}</div>
        <div className="description">{state.currentWeather?.weather[0].main}</div>
        <div className="date-label">19 August</div>
        <div>
          <img
            src={`http://openweathermap.org/img/w/${state.currentWeather?.weather[0].icon}.png`}
          />
        </div>
      </div>
    </Card>
  );
}

import { useEffect } from 'react';
import { useAppDispatch } from '../../../stores';
import { getCurrentWeatherByCity, getCurrentWeatherByGeo, getSavedCities } from '../services';
import type { City } from '../types';

export const useCurrentWeather = (city?: City) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const geo = navigator.geolocation;

    if (geo) {
      geo.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(getCurrentWeatherByGeo({ lat: latitude, lon: longitude }));
        },
        (error) => {
          console.warn('Geolocation error:', error);
          dispatch(getCurrentWeatherByCity(city ?? 'Kyiv'));
          dispatch(getSavedCities());
        }
      );
    } else {
      dispatch(getCurrentWeatherByCity(city ?? 'Kyiv'));
      dispatch(getSavedCities());
    }
  }, [city, dispatch]);
};

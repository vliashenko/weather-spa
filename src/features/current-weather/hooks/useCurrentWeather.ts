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
          dispatch(getSavedCities());
        },
        () => {
          dispatch(getCurrentWeatherByCity(city ?? 'Kyiv'));
          dispatch(getSavedCities());
        },
        {
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      dispatch(getCurrentWeatherByCity(city ?? 'Kyiv'));
      dispatch(getSavedCities());
    }
  }, [city, dispatch]);
};

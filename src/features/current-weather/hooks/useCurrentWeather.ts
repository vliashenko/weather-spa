import { useEffect } from 'react';
import { useAppDispatch } from '../../../stores';
import { getCurrentWeatherByCity, getSavedCities } from '../services';
import type { City } from '../types';

export const useCurrentWeather = (city?: City) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentWeatherByCity(city ?? 'Kyiv'));
    dispatch(getSavedCities());
  }, [city, dispatch]);
};

import { useEffect } from 'react';
import { useAppDispatch } from '../../../stores';
import { getCurrentWeatherByCity, getCurrentWeatherByGeo } from '../api';

export const useCurrentWeather = () => {
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
          dispatch(getCurrentWeatherByCity('Kyiv'));
        }
      );
    } else {
      dispatch(getCurrentWeatherByCity('Kyiv'));
    }
  }, [dispatch]);
};

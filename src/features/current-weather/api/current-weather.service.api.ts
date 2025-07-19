import { createAsyncThunk } from '@reduxjs/toolkit/react';
import type { CurrentWeather } from '../types';

const apiUrl = import.meta.env.VITE_WEATHER_API_KEY;

export const getCurrentWeatherByCity = createAsyncThunk<CurrentWeather, string>(
  'currentWeather/fetchByCity',
  async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiUrl}&units=metric&lang=ua`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const response = await res.json();

      return {
        weather: response.weather,
        main: response.main,
        visibility: response.visibility,
        wind: response.wind,
        city: response.name
      };
    } catch (err) {
      console.error(err);
      throw new Error('Не вдалося отримати поточну погоду');
    }
  }
);

export const getCurrentWeatherByGeo = createAsyncThunk<
  CurrentWeather,
  { lat: number; lon: number }
>('currentWeather/fetchByGeo', async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiUrl}&units=metric&lang=ua`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const response = await res.json();

    return {
      weather: response.weather,
      main: response.main,
      visibility: response.visibility,
      wind: response.wind,
      city: response.name
    };
  } catch (err) {
    console.error(err);
    throw new Error('Не вдалося отримати поточну погоду');
  }
});

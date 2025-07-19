import { createAsyncThunk } from '@reduxjs/toolkit/react';
import type { CurrentWeather } from '../types';

export const getCurrentWeather = createAsyncThunk<CurrentWeather, string>(
  'currentWeather/fetchByCity',
  async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API_KEY}&units=metric&lang=ua`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const response = await res.json();

      return {
        weather: response.weather,
        main: response.main,
        visibility: response.visibility,
        wind: response.wind
      };
    } catch (err) {
      console.error(err);
      throw new Error('Не вдалося отримати поточну погоду');
    }
  }
);

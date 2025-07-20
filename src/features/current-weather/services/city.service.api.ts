import { createAsyncThunk } from '@reduxjs/toolkit/react';
import type { City } from '../types';

export const getSavedCities = createAsyncThunk<City[]>('currentWeather/getCities', async () => {
  let current: City[];
  try {
    current = JSON.parse(localStorage.getItem('cities') || '[]');
  } catch (err) {
    console.error(err);
    throw new Error('Failed to load cities from storage');
  }

  return current ?? [];
});

export const addCityToSaved = createAsyncThunk(
  'currentWeather/addCity',
  async (city: City, { dispatch }) => {
    try {
      const current: City[] = JSON.parse(localStorage.getItem('cities') || '[]');
      const updated = [...current, city];

      if (!current.includes(city)) {
        localStorage.setItem('cities', JSON.stringify(updated));
      }

      await dispatch(getSavedCities());
    } catch (err) {
      console.error(err);
      throw new Error('Failed to add a city to the storage');
    }

    return city;
  }
);

export const deleteCityFromSaved = createAsyncThunk(
  'currentWeather/deleteCity',
  async (city: City) => {
    try {
      const current: City[] = JSON.parse(localStorage.getItem('cities') || '[]');
      const updated = current.filter((current) => city !== current);
      localStorage.setItem('cities', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
      throw new Error('Failed to remove a city from the storage');
    }

    return city;
  }
);

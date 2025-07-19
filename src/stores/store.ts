import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cityReducer from '../features/city/stores/city-reducer';
import currentWeatherReducer from '../features/current-weather/stores/current-weather-reducer';

const combinedReducers = combineReducers({
  cities: cityReducer,
  currentWeather: currentWeatherReducer
});

const store = configureStore({
  reducer: combinedReducers,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

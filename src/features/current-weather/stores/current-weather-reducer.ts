import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getCurrentWeatherByCity, getCurrentWeatherByGeo } from '../api';
import type { CurrentWeather } from '../types';

const initialState: { currentWeather: CurrentWeather | null; loading: boolean; error: string } = {
  currentWeather: null,
  loading: false,
  error: ''
};

const currentWeatherSlice = createSlice({
  name: 'getCurrentWeather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCurrentWeatherByCity.fulfilled,
      (state, action: PayloadAction<CurrentWeather>) => {
        if (action.payload) {
          state.currentWeather = action.payload;
        }
        state.loading = false;
      }
    );
    builder.addCase(getCurrentWeatherByCity.rejected, (state, action) => {
      state.error = action.error.message ?? 'Error occured';
      state.loading = false;
    });
    builder.addCase(getCurrentWeatherByCity.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      getCurrentWeatherByGeo.fulfilled,
      (state, action: PayloadAction<CurrentWeather>) => {
        if (action.payload) {
          state.currentWeather = action.payload;
        }
        state.loading = false;
      }
    );
    builder.addCase(getCurrentWeatherByGeo.rejected, (state, action) => {
      state.error = action.error.message ?? 'Error occured';
      state.loading = false;
    });
    builder.addCase(getCurrentWeatherByGeo.pending, (state) => {
      state.loading = true;
    });
  }
});

export default currentWeatherSlice.reducer;

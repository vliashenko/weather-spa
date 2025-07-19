import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getCurrentWeather } from '../api';
import type { CurrentWeather } from '../types';

const initialState: { currentWeather: CurrentWeather | null; loading: boolean; error: string } = {
  currentWeather: null,
  loading: false,
  error: ''
};

const getCurrentWeatherByCitySlice = createSlice({
  name: 'getCurrentWeatherByCity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeather.fulfilled, (state, action: PayloadAction<CurrentWeather>) => {
      if (action.payload) {
        state.currentWeather = action.payload;
      }
      state.loading = false;
    });
    builder.addCase(getCurrentWeather.rejected, (state, action) => {
      state.error = action.error.message ?? 'Error occured';
      state.loading = false;
    });
    builder.addCase(getCurrentWeather.pending, (state) => {
      state.loading = true;
    });
  }
});

export default getCurrentWeatherByCitySlice.reducer;

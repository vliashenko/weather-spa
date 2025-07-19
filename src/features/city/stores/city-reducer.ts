import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { addCityToSaved, deleteCityFromSaved, getSavedCities } from '../api';
import type { City } from '../types';

const initialState: { cities: City[]; loading: boolean; error: string } = {
  cities: [],
  loading: false,
  error: ''
};

const citySlice = createSlice({
  name: 'citySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSavedCities.fulfilled, (state, action: PayloadAction<City[]>) => {
      if (action.payload) {
        state.cities = action.payload;
      }
      state.loading = false;
    });
    builder.addCase(getSavedCities.rejected, (state, action) => {
      state.error = action.error.message ?? 'Error occured';
      state.loading = false;
    });
    builder.addCase(getSavedCities.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addCityToSaved.fulfilled, (state, action) => {
      state.cities = [...state.cities, action.payload];
      state.loading = false;
    });
    builder.addCase(addCityToSaved.rejected, (state, action) => {
      state.error = action.error.message ?? 'Error occured';
      state.loading = false;
    });
    builder.addCase(addCityToSaved.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteCityFromSaved.fulfilled, (state, action) => {
      state.cities = state.cities.filter((city) => city !== action.payload);
      state.loading = false;
    });
    builder.addCase(deleteCityFromSaved.rejected, (state, action) => {
      state.error = action.error.message ?? 'Error occured';
      state.loading = false;
    });
    builder.addCase(deleteCityFromSaved.pending, (state) => {
      state.loading = true;
    });
  }
});

export default citySlice.reducer;

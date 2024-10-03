import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch weather data with lat/lon
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ lat, lon }) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch weather data');
    }
    return data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weatherData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;

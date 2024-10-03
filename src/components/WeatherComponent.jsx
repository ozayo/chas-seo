import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../weatherSlice';

const WeatherComponent = () => {
  const dispatch = useDispatch();
  const { weatherData, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    console.log('API Key:', import.meta.env.VITE_WEATHER_API_KEY); // Konsolda API anahtarını kontrol edelim
    dispatch(fetchWeather({ lat: 59.3293, lon: 18.0686 })); // Enlem ve boylam bilgisi ile API çağrısı
  }, [dispatch]);

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!weatherData) return <p>No weather data available</p>;

  return (
    <div data-testid="weather-component">
      <h2 className="text-2xl lg:text-3xl font-bold lg:tracking-tight">Current Weather in Stockholm</h2>
      <p>Temperature: {weatherData.main?.temp}°C</p>
      <p>Weather: {weatherData.weather?.[0].description}</p>
      <p>Humidity: {weatherData.main?.humidity}%</p>
    </div>
  );
};

export default WeatherComponent;

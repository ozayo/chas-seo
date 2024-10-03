import React from 'react';
import WeatherComponent from '../components/WeatherComponent';

const Weather = () => {
  return (
    <section className="mt-5 md:mt-16 mb-20 pb-16">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight mb-2">Weather Information</h1>
      <WeatherComponent />
      </div>
    </section>
  );
};

export default Weather;

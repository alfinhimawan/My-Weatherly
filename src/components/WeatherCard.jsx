import React from "react";

function WeatherCard({ weather }) {
  return (
    <div className="bg-white rounded shadow p-6 text-center mt-6">
      <h2 className="text-2xl font-bold">{weather.city}</h2>
      <p>{weather.country}</p>
      <div className="flex justify-center items-center mt-4">
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
        />
        <h3 className="text-3xl font-bold">{weather.temp}°C</h3>
      </div>
      <p>{weather.description}</p>
    </div>
  );
}

export default WeatherCard;
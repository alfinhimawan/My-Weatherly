import React from "react";

function WeatherCard({ weather }) {
  return (
    <div className="bg-white rounded shadow p-6 text-center mt-6">
      <h2 className="text-xl font-bold">
        {weather.city}, {weather.state}, {weather.country}
      </h2>
      <p className="text-gray-700">Temperature: {weather.temp}°C</p>
      <p className="text-gray-700">Description: {weather.description}</p>
      <div className="flex justify-center items-center mt-4">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="Weather Icon"
        />
        <h3 className="text-3xl font-bold">{weather.temp}°C</h3>
      </div>
    </div>
  );
}

export default WeatherCard;

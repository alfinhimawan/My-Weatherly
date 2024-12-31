import React from "react";
import { FaTemperatureHigh, FaWind, FaTint } from "react-icons/fa";

function WeatherCard({ weather }) {
  return (
    <div className="bg-white shadow-lg rounded p-4 max-w-sm mx-auto mt-8">
      <h2 className="text-xl font-bold text-center">
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="text-center mt-4">
        <h3 className="text-2xl font-bold">{weather.main.temp}°C</h3>
        <p className="text-gray-600">{weather.weather[0].description}</p>
      </div>
      <div className="flex justify-around mt-4">
        <div className="text-center">
          <FaTemperatureHigh className="text-blue-600 mx-auto" />
          <p>{weather.main.temp_max}°C</p>
        </div>
        <div className="text-center">
          <FaTint className="text-blue-600 mx-auto" />
          <p>{weather.main.humidity}%</p>
        </div>
        <div className="text-center">
          <FaWind className="text-blue-600 mx-auto" />
          <p>{weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

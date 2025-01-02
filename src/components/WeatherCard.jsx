import React from "react";
import { motion } from "framer-motion";

function WeatherCard({ weather }) {
  return (
    <motion.div
      className="bg-gradient-to-r from-orange-100 via-pink-200 to-rose-300 text-white rounded-xl shadow-xl p-6 text-center mt-6 transform transition-transform duration-500 hover:scale-105"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <h2 className="text-2xl font-bold mb-4">
        {weather.city}, {weather.state}, {weather.country}
      </h2>
      <p className="text-lg mb-2">Temperature: {weather.temp}°C</p>
      <p className="text-sm text-gray-200">{weather.description}</p>
      <div className="flex justify-center items-center mt-4">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="Weather Icon"
          className="w-20 h-20 object-contain animate-bounce"
        />
        <h3 className="text-4xl font-semibold ml-4">{weather.temp}°C</h3>
      </div>
    </motion.div>
  );
}

export default WeatherCard;

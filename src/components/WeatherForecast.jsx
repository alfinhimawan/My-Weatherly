import React from "react";
import { motion } from "framer-motion";

function WeatherForecast({ forecast }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
      {forecast.map((day, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-r from-green-200 via-teal-200 to-blue-300 text-white rounded-2xl shadow-xl p-6 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
        >
          <h4 className="font-extrabold text-2xl mb-2">{day.dayName}</h4>
          <p className="text-lg text-gray-200 mb-4">{day.date}</p>
          <div className="flex justify-center items-center mb-4">
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.description}
              className="w-20 h-20 object-contain animate-pulse"
            />
          </div>
          <p className="text-4xl font-semibold mt-2">{day.temp}°C</p>
          <p className="text-lg mt-1 text-gray-100">{day.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default WeatherForecast;

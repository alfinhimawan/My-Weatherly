import React from "react";

function WeatherForecast({ forecast }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
      {forecast.map((day, index) => (
        <div key={index} className="bg-white rounded shadow p-4 text-center">
          <h4 className="font-bold">
            {day.dayName}, {day.date}
          </h4>
          <div className="flex justify-center items-center">
            <img
              src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.description}
            />
          </div>

          <p>{day.temp}°C</p>
          <p>{day.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;

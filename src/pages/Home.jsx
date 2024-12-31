import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Swal from "sweetalert2";

function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (location) => {
    try {
      const lokasi = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${location}&format=json`
      );
      const locResult = await lokasi.json();

      if (locResult.length === 0) {
        throw new Error("City not found");
      }

      const API_KEY = "5350af6a93aacd964eb9f66a919c63f4";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${locResult[0].lat}&lon=${locResult[0].lon}&lang=id&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Error fetching weather data");
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);

      Swal.fire({
        icon: "success",
        title: "Data Found",
        text: `Weather in ${data.name}, ${data.sys.country} successfully found!`,
      });
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
      setWeatherData(null);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Welcome To MyWeatherly
      </h1>
      <SearchBar onSearch={fetchWeather} />
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
}

export default Home;

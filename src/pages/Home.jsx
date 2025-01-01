import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import WeatherForecast from "../components/WeatherForecast";
import Footer from "../components/Footer";

function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const fetchWeather = async (city) => {
    const API_KEY = "5350af6a93aacd964eb9f66a919c63f4";

    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const weatherData = await weatherRes.json();

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      const forecastData = await forecastRes.json();

      setCurrentWeather({
        city: weatherData.name,
        country: weatherData.sys.country,
        temp: Math.round(weatherData.main.temp),
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
      });

      const dailyForecast = forecastData.list
        .filter((_, index) => index % 8 === 0)
        .map((item) => ({
          date: new Date(item.dt_txt).toLocaleDateString(),
          temp: Math.round(item.main.temp),
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        }));

      setForecast(dailyForecast);
    } catch (error) {
      alert("Failed to fetch weather data. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <SearchBar onSearch={fetchWeather} />
      <div className="container mx-auto p-6">
        {currentWeather && <WeatherCard weather={currentWeather} />}
        {forecast.length > 0 && <WeatherForecast forecast={forecast} />}
      </div>
      <Footer />
    </div>
  );
}

export default Home;

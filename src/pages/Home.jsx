import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import WeatherForecast from "../components/WeatherForecast";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const fetchWeather = async (city) => {
    const API_KEY = "5350af6a93aacd964eb9f66a919c63f4";

    try {
      const geoRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );
      const geoData = await geoRes.json();

      if (geoData.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Location Not Found",
          text: "Please check the city name and try again.",
        });
        return;
      }

      const { lat, lon, name, state, country } = geoData[0];

      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const weatherData = await weatherRes.json();

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const forecastData = await forecastRes.json();

      setCurrentWeather({
        city: name,
        state: state || "Unknown",
        country: country,
        temp: Math.round(weatherData.main.temp),
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
      });

      const dailyForecast = forecastData.list
        .filter((_, index) => index % 8 === 0)
        .map((item) => {
          const date = new Date(item.dt_txt);
          return {
            date: date.toLocaleDateString("en-GB"),
            dayName: date.toLocaleDateString("en-US", { weekday: "long" }),
            temp: Math.round(item.main.temp),
            description: item.weather[0].description,
            icon: item.weather[0].icon,
          };
        });

      setForecast(dailyForecast);

      Swal.fire({
        icon: "success",
        title: "Weather Data Fetched!",
        text: `Weather data for ${name}, ${state}, ${country} has been successfully retrieved.`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch weather data. Please try again.",
      });
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

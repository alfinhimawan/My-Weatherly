```markdown
# Weatherly 🌦️

Weatherly is a responsive weather forecast application built using React.js. It allows users to search for weather conditions in a specific location and view detailed forecasts for the next 7 days.

## Features 🚀

- **Real-time Weather Updates**: Get current weather conditions, including temperature, description, and weather icon.
- **7-day Forecast**: View daily forecasts, including temperature, weather description, and day of the week.
- **Search by City**: Search for weather conditions starting from city level down to country level.
- **Dynamic Backgrounds**: Background color changes based on weather conditions (e.g., sunny, cloudy, rainy).
- **SweetAlert Notifications**: Provides user-friendly alerts and notifications using SweetAlert2.

## Tech Stack 🛠️

- **Frontend**: React.js
- **API**: OpenWeatherMap API
- **UI Enhancements**: TailwindCSS, SweetAlert2

## Getting Started ⚙️

Follow these instructions to get the project running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- Yarn package manager (install via `npm install -g yarn`)
- OpenWeatherMap API key (sign up [here](https://openweathermap.org/api))

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alfinhimawan/weatherly.git
   cd weatherly
   ```

2. **Install dependencies using Yarn**:
   ```bash
   yarn install
   ```

3. **Add your OpenWeatherMap API key**:
   - Create a `.env` file in the root directory:
     ```
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```

4. **Run the application**:
   ```bash
   yarn start
   ```

5. **Access the application**:
   - Open your browser and visit: `http://localhost:3000`

## Project Structure 📂

```
weatherly/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── WeatherForecast.jsx
│   │   ├── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   ├── App.js
│   ├── index.js
├── .env
├── package.json
```

## API Integration 🌐

- **OpenWeatherMap API**:
  - Current Weather Data: Fetches real-time weather conditions.
  - 5-Day Forecast: Provides weather data for the next 7 days.

## Contributing 🤝

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/alfinhimawan/weatherly/issues).

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙌

- [OpenWeatherMap](https://openweathermap.org/) for the weather data API.
- [SweetAlert2](https://sweetalert2.github.io/) for modern alert UI.
- [TailwindCSS](https://tailwindcss.com/) for sleek design and responsiveness.

---

### Created by [Alfin Himawan Santosa](https://github.com/alfinhimawan) ❤️
```
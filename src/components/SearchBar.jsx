import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) {
      alert("Please enter a city name.");
      return;
    }
    onSearch(city);
    setCity("");
  };

  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border rounded-l px-4 py-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
      >
        Find
      </button>
    </div>
  );
}

export default SearchBar;
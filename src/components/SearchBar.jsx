import React, { useState } from "react";
import Swal from 'sweetalert2';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city) {
      Swal.fire({
        icon: 'warning',
        title: 'Warning',
        text: 'Please enter the city name first!',
      });
      return; 
    }

    onSearch(city);
    setCity(""); 
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <input
        type="text"
        className="border rounded px-4 py-2"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;

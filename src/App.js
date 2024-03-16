import React, { useState } from 'react';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Here you can implement your search logic, e.g., fetching data from an API
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Enter search term..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchComponent;

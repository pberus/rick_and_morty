import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (!isNaN(inputValue) && inputValue >0) {
      setId(inputValue);
    }
  };

  const handleSearch = () => {
    onSearch(id);
    setId("");
  };

  return (
    <div>
      <input type='number' value={id} onChange={handleChange} />
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
};

export default SearchBar;

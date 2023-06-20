import React from "react";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input type='search' value={id} onChange={handleChange} />
      <button
        onClick={() => {
          onSearch(id)
          setId("")
        }}
      >
        Agregar
      </button>
    </div>
  );
}

export default SearchBar;

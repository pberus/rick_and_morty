import React, { useState } from "react";
import style from "./SearchBar.module.css";
import { useLocation } from "react-router-dom";

const SearchBar = ({ onSearch, random }) => {
  const [id, setId] = useState("");

  const location = useLocation();

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (!isNaN(inputValue) && inputValue >= 0) {
      if (inputValue > 827) {
        window.alert("Existen 826 personajes");
      } else {
        setId(inputValue);
      }
    }
  };

  const handleSearch = () => {
    onSearch(id);
    setId("");
  };

  const handleRandom = () => {
    if (location.pathname !== "/home") {
      window.alert("No se puede agregar, movete a Home!");
    } else {
      random();
    }
  };

  return (
    <div className={style.container}>
      <input
        className={style.containerElement}
        type='number'
        value={id}
        onChange={handleChange}
        placeholder='Introduce el ID'
      />
      <button className={style.containerElement} onClick={handleSearch}>
        Agregar
      </button>
      <button className={style.containerElement} onClick={handleRandom}>
        ADD RANDOM
      </button>
    </div>
  );
};

export default SearchBar;

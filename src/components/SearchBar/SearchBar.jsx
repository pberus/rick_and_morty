import React, { useState } from "react";
import style from "./SearchBar.module.css"

const SearchBar = ({ onSearch, random }) => {
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
    <div className={style.container}>
      <input className={style.containerElement} type='number' value={id} onChange={handleChange} placeholder="Introduce el ID"/>
      <button className={style.containerElement} onClick={handleSearch}>Agregar</button>
      <button className={style.containerElement} onClick={random}>ADD RANDOM</button>
    </div>
  );
};

export default SearchBar;

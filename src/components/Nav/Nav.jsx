import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

function Nav({onSearch, random, logout}) {

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button onClick={random}>ADD RANDOM</button>
      <Link to="/about"><button>About</button></Link>
      <Link to="/home"><button>Home</button></Link>
      <Link to="/favorites"><button>Favorites</button></Link>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Nav;

//Puedo poner NavLink para darle estilos a los link
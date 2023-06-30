import React, { useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({ onSearch, random, logout }) => {
  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const handleSearch = useCallback(
    (id) => {
      onSearch(id);
    },
    [onSearch]
  );

  return (
    <div className={style.nav}>
      <div className={style.buttons}>
        <Link to='/about'>
          <button>About</button>
        </Link>
        <Link to='/home'>
          <button>Home</button>
        </Link>
        <Link to='/favorites'>
          <button>Favorites</button>
        </Link>
        <button className={style.logoutBtn} onClick={logout}>
          logout
        </button>
      </div>

      <div className={style.searchBar}>
        <SearchBar onSearch={onSearch} random={random} />
      </div>
    </div>
  );
};

export default Nav;

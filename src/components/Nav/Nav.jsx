import React from "react";
import SearchBar from "./SearchBar/SearchBar";

function Nav({onSearch, random}) {

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button onClick={random}>ADD RANDOM</button>
    </div>
  );
}

export default Nav;

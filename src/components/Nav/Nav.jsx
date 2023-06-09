import SearchBar from "./SearchBar/SearchBar";

function Nav() {
  function searchHandler() {
    window.alert("El ID que estoy buscando");
  }

  return (
    <div>
      <SearchBar onSearch={searchHandler} />
    </div>
  );
}

export default Nav;

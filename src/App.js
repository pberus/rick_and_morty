import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = () => {
    this.setCharacters({});
  };

  return (
    <div className='App'>
      <Nav />
      <Cards characters={characters} />
    </div>
  );
}

export default App;

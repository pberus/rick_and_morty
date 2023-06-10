import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          if (data.id)
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id)),
    );
  };

  const randomHandler = () => {
    let haveIt = []
    //Generate random number
    let random = (Math.random() * 826).toFixed()

    //Coerce to number by boxing
    random = Number(random)

    if(!haveIt.includes(random)) {
      haveIt.push(random)
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars,data])
        } else{
          window.alert("¡No hay personajes con este ID!")
        }
      })
    } else {
      console.log("Ya agregaste todos los personajes")
      return false
    }
  }

  return (
    <div className='App'>
      <Nav onSearch={onSearch} random={randomHandler} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;

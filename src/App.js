import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Landing from "./views/Landing/Landing";
import Error from "./views/Error/Error";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "password";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else if (userData.email !== EMAIL) {
      alert("El email es incorrecto")
    } else  {
      alert("La contraseña es incorrecta")
    }
  }

  const logout = () => {
    setAccess(false)
    navigate("/")
  }

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          if (data.id) setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
  };

  const randomHandler = () => {
    let haveIt = [];
    //Generate random number
    let random = (Math.random() * 826).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        });
    } else {
      console.log("Ya agregaste todos los personajes");
      return false;
    }
  };

  return (
    <div className='App'>
      {location.pathname !== "/" && (
        <Nav logout={logout} onSearch={onSearch} random={randomHandler} />
      )}
      <Routes>
        <Route path='/' element={<Landing login={login}/>}></Route>
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;

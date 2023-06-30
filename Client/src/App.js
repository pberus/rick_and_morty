import "./App.css";
import { Home, About, Detail, Landing, Error, Favorites } from "./views";
import { Nav } from "./components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "buenas";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else if (userData.email !== EMAIL) {
      alert("El email es incorrecto");
    } else {
      alert("La contraseña es incorrecta");
    }
  }

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          const idYaAgregado = characters.some(
            (character) => character.id === data.id
          );
          if (data.id && !idYaAgregado) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡Ya agregaste un personaje con esa ID! Pruebe otro");
          }
        }
      })
      .catch((error) => {
        window.alert(
          `Ocurrio un error (${error}).\n¡No hay personajes con este ID!`
        );
      });
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
    dispatch(removeFav(id));
  };

  const randomHandler = () => {
    let haveIt = [];
    //Generate random number
    let random = (Math.random() * 826).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`http://localhost:3001/rickandmorty/character/${random}`)
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
        <Route path='/' element={<Landing login={login} />} />
        <Route
          path='/home'
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;

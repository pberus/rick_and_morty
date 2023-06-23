import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

export default function Card({ character, onClose }) {
  const { id, name, species, gender, image } = character;

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = (data) => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(data));
    } else {
      setIsFav(true);
      dispatch(addFav(data));
    }
  };

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      {isFav ? (
        <button onClick={() => handleFavorite(id)}>❤️</button>
      ) : (
        <button onClick={() => handleFavorite(character)}>🤍</button>
      )}
      {location.pathname === "/home" && (
        <button
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
      )}
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      {location.pathname === "/favorites" && (
        <button onClick={() => navigate("/home")}>Volver</button>
      )}
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

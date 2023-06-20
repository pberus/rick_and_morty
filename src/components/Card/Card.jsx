import { Link, useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card({ character, onClose, addFav, removeFav, myFavorites }) {
  const { id, name, species, gender, image } = character;

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
      removeFav(data);
    } else {
      setIsFav(true);
      addFav(data);
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

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

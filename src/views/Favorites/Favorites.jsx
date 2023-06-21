import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { filterCards, orderCards, resetFav } from "../../redux/actions";
import { useState } from "react";

export default function Favorites() {
  const [aux, setAux] = useState(false);

  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch(orderCards(value));
    setAux(true);
  };

  const handleFilter = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch(filterCards(value));
  };

  const resetButton = () => {
    dispatch(resetFav());
  };

  return (
    <div>
      <select onChange={handleOrder} name='order' defaultValue={"DEFAULT"}>
        <option value='DEFAULT' disable>
          Select Order
        </option>
        <option value='Ascendente'>Ascendente</option>
        <option value='Descendente'>Descendente</option>
      </select>
      <select onChange={handleFilter} name='filter' defaultValue={"DEFAULT"}>
        <option value='DEFAULT' disable>
          Select Filter
        </option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>unknown</option>
      </select>
      <button onClick={resetButton}>Reset</button>
      <Cards characters={myFavorites} />
    </div>
  );
}

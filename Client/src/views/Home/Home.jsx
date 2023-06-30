import style from "./Home.module.css";

import Cards from "../../components/Cards/Cards";

const Home = ({ onClose, characters }) => {
  return (
    <div className={style.homeContainer}>
      <h1>HOME</h1>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
};

export default Home;

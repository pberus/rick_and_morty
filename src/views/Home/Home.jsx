import Cards from "../../components/Cards/Cards";

const Home = ({ onClose, characters }) => {
  return (
    <div>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
};

export default Home;

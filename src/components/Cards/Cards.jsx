import Card from "../Card/Card";

function Cards({ characters }) {
  const onClose = () => {
    window.alert("Emulamos que se cierra la card");
  };

  return (
    <>
      {characters.map(({ name, species, gender, image, id }) => {
        return (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </>
  );
}

export default Cards;

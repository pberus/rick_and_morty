import Card from "../Card/Card";
import React from "react";

function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map((character) => {
        return (
          <Card key={character.id} character={character} onClose={onClose} />
        );
      })}
    </div>
  );
}

export default Cards;

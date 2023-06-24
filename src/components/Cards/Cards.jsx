import Card from "../Card/Card";
import React from "react";
import style from "./Cards.module.css"

function Cards({ characters, onClose }) {
  return (
    <div className={style.cards}>
      {characters?.map((character) => {
        return (
          <Card key={character.id} character={character} onClose={onClose} />
        );
      })}
    </div>
  );
}

export default Cards;

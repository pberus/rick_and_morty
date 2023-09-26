import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <h1>ABOUT</h1>
      <h2>Este es mi proyecto de Rick and Morty</h2>
      <h3>¡Agrega los personajes que quieras!</h3>
      <h2>Desarrollado por: PEDRO BERUSTEIN</h2>
    </div>
  );
};

export default About;

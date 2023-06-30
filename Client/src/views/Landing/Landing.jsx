import { LoginForm } from "../../components";
import style from "./Landing.module.css";
import img from "../../components/assets/images/rick-and-morty-logo.jpeg";

const Landing = ({ login }) => {
  return (
    <div className={style.container}>
      <img src={img} alt='rick-and-morty-logo' />
      <LoginForm login={login} />
    </div>
  );
};

export default Landing;

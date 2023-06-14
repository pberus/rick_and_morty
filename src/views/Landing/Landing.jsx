import LoginForm from "../../components/LoginForm/LoginForm";

function Landing({login}) {
  return (
    <div>
      <h1>Esto es el landing, para generar cards iniciar sesion</h1>
      <LoginForm login={login}/>
    </div>
  );
}

export default Landing;

import { useState } from "react";
import validate from "./validate";

const LoginForm = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({
      ...userData,
      [property]: value,
    });
    setErrors(
      validate({
        ...userData,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'></label>
          <input
            onChange={handleChange}
            value={userData.email}
            name='email'
            type='text'
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor='password'></label>
          <input
            onChange={handleChange}
            value={userData.password}
            name='password'
            type='password'
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;

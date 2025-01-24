import { useState } from "react";
import { loginUser, } from "../../redux/Auth/authOperations";
import { useDispatch } from "react-redux";

import s from "./Login.module.css";

function LoginPage() {
  const [formLogin, setFormRegister] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRegister((prev) => ({ ...prev, [name]: value })); //creating the form object to send to the server
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("fetch -->", formLogin);
    dispatch(loginUser(formLogin));

    // dispatch(
    //   formLogin({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    e.target.reset();
  };
  return (
    <div className={s.registrationWrapper}>
      <h1 className={s.regTitle}>Login</h1>
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          <h2 className={s.labels}>E-mail</h2>
          <input
            name="email"
            type="email"
            placeholder="Enter e-mail"
            onChange={handleChange}
          />
        </label>
        <label>
          <h2 className={s.labels}>Password</h2>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </label>

        <button className={s.btnReg} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/Auth/authOperations";

import s from "./RegisterPage.module.css";

function RegisterPage() {
  const [formRegister, setFormRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  // console.log('formRegister data', formRegister);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRegister((prev) => ({ ...prev, [name]: value })); //creating the form object to send to the server
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fetch -->", formRegister);
    dispatch(registerUser(formRegister));

    // dispatch(
    //   registerUser({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    e.target.reset();
  };

  return (
    <div className={s.registrationWrapper}>
      <h1 className={s.regTitle}>Registration</h1>
      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          <h2 className={s.labels}>Name</h2>
          <input
            name="name"
            // value={form.name}
            type="text"
            placeholder="Enter name"
            onChange={handleChange}
          />
        </label>

        <label>
          <h2 className={s.labels}>E-mail</h2>
          <input
            name="email"
            // value={form.email}
            type="email"
            placeholder="Enter e-mail"
            onChange={handleChange}
          />
        </label>

        <label>
          <h2 className={s.labels}>Password</h2>
          <input
            name="password"
            // value={form.password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </label>

        <button className={s.btnReg} type="submit">
          Registration
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;

import s from "./Login.module.css";

function LoginPage() {
  return (
    <div className={s.registrationWrapper}>
      <h1 className={s.regTitle}>Login</h1>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>
          <h2 className={s.labels}>E-mail</h2>
          <input name="email" type="email" placeholder="Enter e-mail" />
        </label>
        <label>
          <h2 className={s.labels}>Password</h2>
          <input name="password" type="password" placeholder="Password" />
        </label>

        <button className={s.btnReg} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

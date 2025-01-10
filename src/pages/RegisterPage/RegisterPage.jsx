

import s from './RegisterPage.module.css';

function RegisterPage() {
  return (
    
    <div className={s.registrationWrapper}>
    
    <h1 className={s.regTitle}>Registration</h1>
    <form >
      <label>
        <h2 className={s.labels}>Name</h2>
        <input name="name" type="text" placeholder="Enter name" />
      </label>
      <label>
        <h2 className={s.labels}>E-mail</h2>
        <input name="email" type="email" placeholder="Enter e-mail" />
      </label>
      <label>
        <h2 className={s.labels}>Password</h2>
        <input name="password" type="password" placeholder="Password" />
      </label>

      <button className={s.btnReg} type="submit">
        Registration
      </button>
    </form>
    
  </div>
  )
}

export default RegisterPage
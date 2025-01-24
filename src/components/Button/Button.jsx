/* eslint-disable react/prop-types */
// import { clsx } from 'clsx';
import s from './Button.module.css';

const Button = ({ children, btnType, id, onClick }) => {
  return btnType === 'button' ? (
    <button className={s.button} type={btnType} onClick={() => onClick && onClick(id)}>
      {children}
    </button>
  ) : (
    <button className={s.button} type={btnType}>
      {children}
    </button>
  );
};

export default Button;

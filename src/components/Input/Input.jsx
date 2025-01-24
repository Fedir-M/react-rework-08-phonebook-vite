/* eslint-disable react/prop-types */
import s from './Input.module.css';

const Input = ({ title, type, name, placeholder, value,  method, pattern }) => {
  return (
    <label>
      <p>{title}</p>
      {method ? (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          className={s.inputs}
          pattern={pattern}
          required
          onChange={e => method(e)}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={s.inputs}
          pattern={pattern}
          required
        />
      )}
    </label>
  );
};

export default Input;

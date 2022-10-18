import React from 'react';
import style from './Input.module.css';

const Input = ({ label, id, variant, ...props }) => {
  return (
    <div className={style.field}>
      <label className={style.label} htmlFor={id}>
        {label}
      </label>
      <input className={style.input} id={id} {...props} />
    </div>
  );
};

export default Input;

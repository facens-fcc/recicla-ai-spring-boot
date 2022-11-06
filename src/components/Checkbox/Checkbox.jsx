import React from 'react';
import style from './Checkbox.module.css';

const Checkbox = ({ id, name, label, onChange }) => {
  return (
    <div className={style.checkbox}>
      <input type="checkbox" name={name} id={id} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;

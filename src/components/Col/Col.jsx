import React from 'react';
import style from './Col.module.css';

const Col = ({ children, gridColumn }) => {
  return (
    <div className={style.col} {...(gridColumn ? { style: { gridColumn } } : {})}>
      {children}
    </div>
  );
};

export default Col;

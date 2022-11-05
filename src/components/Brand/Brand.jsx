import React from 'react';
import style from './Brand.module.css';

const Brand = ({ className }) => {
  return (
    <a href="/" className={`${style.brand} ${className}`}>
      Recicla.aí
    </a>
  );
};

export default Brand;

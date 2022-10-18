import React from 'react';
import style from './Footer.module.css';
import Brand from '../Brand/Brand';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Brand />
    </footer>
  );
};

export default Footer;

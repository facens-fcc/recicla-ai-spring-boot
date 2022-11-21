import React, { useState } from 'react';
import style from './Footer.module.css';
import Brand from '../Brand/Brand';

const Footer = () => {
  const isHomePage = window.location.pathname === '/';

  return (
    <footer className={`${style.footer} ${isHomePage ? style.footerBlack : ''}`}>
      <div className="container">
        <div className={style.footer__inner}>
          <Brand />
          <div className={style.footer__about}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quos facere in quidem iusto rerum consequatur facilis neque ut amet ipsum obcaecati, dicta iste nihil optio distinctio rem dolores error.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

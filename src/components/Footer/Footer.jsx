import React, { useState } from 'react';
import style from './Footer.module.css';
import Brand from '../Brand/Brand';

const Footer = () => {
  const isHomePage = window.location.pathname === '/';

  return (
    <footer className={`${style.footer} ${isHomePage ? style.footerDark : ''}`}>
      <div className="container container--narrow">
        <div className={style.footer__wrapper}>
          <Brand />
          <div className={style.footer__about}>
            <p>A Recicla Aí nasceu com intuito de contribuir com a sustentabilidade e, tendo como inspiração os Objetivos de Desenvolvimento Sustentável (ODS), desenvolvemos uma plataforma de informações sobre locais de descarte de lixo eletrônico nacidade de Sorocaba.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

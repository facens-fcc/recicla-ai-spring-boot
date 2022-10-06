import React from 'react';
import { useState } from 'react';

import style from './Header.module.css';
import classNames from 'classnames';

const Header = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function handleToggle() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <a href="/" className={style.logo}>
          {/* <img src="" alt="" /> */}
          Recicla.aí
        </a>

        <a href="#" className={isNavbarOpen ? style.headerToggle__open : style.headerToggle} onClick={handleToggle}>          
          <span></span>
          <span></span>
          <span></span>
        </a>

        <ul className={isNavbarOpen ? style.menuOpen : style.menu}> 
          <li className={style.menuItem}><a href="#">Sobre o projeto</a></li>
          <li className={style.menuItem}><a href="#">O que são lixos eletrônicos</a></li>
          <li className={style.menuItem}><a href="#">Contato</a></li>
          <li className={style.menuItem}><a href="#" className={style.menuItem__green}>Cadastre-se</a></li>
        </ul>
      
      </nav>
    </header>
  )
};

export default Header;

import React from 'react';
import { useState, useEffect } from 'react';

import style from './Header.module.css';

const Header = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.matchMedia("(min-width: 768px)").matches) {
        setIsNavbarOpen(false);
      } 
    })
  }, [setIsNavbarOpen])

  function handleToggle() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <a href="/" className={style.logo}>
          Recicla.aí
        </a>

        <button href="#" className={isNavbarOpen ? `${style.headerToggle} ${style.headerToggle__open}` : `${style.headerToggle}`} onClick={handleToggle}>          
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={isNavbarOpen ? `${style.menu} ${style.menu__open}` : `${style.menu}`}> 
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

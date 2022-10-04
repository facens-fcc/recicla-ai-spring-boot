import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src="" alt="" />
        </a>

        {/* <a href="#">
          <span></span>
          <span></span>
          <span></span>
        </a> */}

        <ul> 
          <li><a href="#">Sobre o projeto</a></li>
          <li><a href="#">O que são lixos eletrônicos</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Cadastre-se</a></li>
        </ul>
      
      </nav>
    </header>
  )
};

export default Header;

import React from 'react';
import style from './Header.module.css';

import Nav from '../Nav/Nav';
import Container from '../Container/Container';

const Header = () => {
  return (
    <header className={style.header}>
      <div className="cotainer">
        <Nav />
      </div>
    </header>
  );
};

export default Header;

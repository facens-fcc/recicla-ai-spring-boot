import { React, useState, useEffect } from 'react';
import style from './Header.module.css';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleButtonAriaLabel = () => {
    return isNavbarOpen ? 'Fechar menu' : 'Abrir menu';
  };

  const handleButtonAriaExpanded = () => {
    return isNavbarOpen ? 'true' : 'false';
  };

  const handleButtonClassName = () => {
    return isNavbarOpen ? `${style.headerToggle} ${style.headerToggle__open}` : style.headerToggle;
  };

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  /**
   * Close the navbar when resizing the window to a larger size.
   */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsNavbarOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /**
   * Close the navbar when pressing the escape key.
   */

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') setIsNavbarOpen(false);
    };

    window.addEventListener('keydown', handleEsc);

    return () => window.removeEventListener('keydown', handleEsc);
  }, [setIsNavbarOpen]);

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <a href="/" className={style.logo}>
          Recicla.aí
        </a>

        <button type="button" aria-haspopup="true" aria-expanded={handleButtonAriaExpanded()} aria-label={handleButtonAriaLabel()} className={handleButtonClassName()} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={isNavbarOpen ? `${style.menu} ${style.menu__open}` : `${style.menu}`}>
          <li className={style.menuItem}>
            <a className="link" href="/">
              Sobre o projeto
            </a>
          </li>
          <li className={style.menuItem}>
            <a className="link" href="/">
              O que são lixos eletrônicos
            </a>
          </li>
          <li className={style.menuItem}>
            <a className="link" href="/">
              Contato
            </a>
          </li>
          <li className={style.menuItem}>
            <a className="link link--highlight" href="/">
              Cadastre-se
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

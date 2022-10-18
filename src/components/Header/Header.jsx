import React, { useState, useEffect } from 'react';
import style from './Header.module.css';
import Brand from '../Brand/Brand';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleButtonLabel = () => {
    return isNavbarOpen ? 'Fechar menu' : 'Abrir menu';
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

  /**
   * Disable scrolling when the navbar is open.
   */

  useEffect(() => {
    return isNavbarOpen ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
  }, [isNavbarOpen]);

  /**
   * Trap focus inside the navbar when it is open.
   */

  useEffect(() => {
    const navbar = document.querySelector('#navbar');
    const firstFocusableElement = navbar.querySelector('a');
    const firstFocusableListElement = navbar.querySelector('ul a');
    const focusableElements = navbar.querySelectorAll('a, button');
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    const handleTab = (event) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    if (isNavbarOpen) {
      firstFocusableListElement.focus();
      window.addEventListener('keydown', handleTab);
    } else {
      window.removeEventListener('keydown', handleTab);
    }

    return () => window.removeEventListener('keydown', handleTab);
  }, [isNavbarOpen]);

  return (
    <header className={style.header}>
      <div className="container">
        <nav className={style.nav} data-menu-open={isNavbarOpen} id="navbar">
          <Brand />

          <button className={style.toggle} onClick={handleToggle} aria-expanded={isNavbarOpen} aria-label={handleButtonLabel()} aria-haspopup="true" type="button">
            <span className={style.toggleLine} />
            <span className={style.toggleLine} />
            <span className={style.toggleLine} />
          </button>

          <ul className={style.menu}>
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
      </div>
    </header>
  );
};

export default Header;

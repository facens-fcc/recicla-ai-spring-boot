import React, { useState, useEffect, useRef } from 'react';
import style from './Header.module.css';
import Brand from '../Brand/Brand';

const Header = () => {
  const menuRef = useRef();
  const menuToggleRef = useRef();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  /**
   * Toggle Menu state.
   */

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  /**
   * Close Menu when pressing Escape.
   * After closing, focus on the menu toggle.
   */

  const handleEscape = ({ key }) => {
    if (key === 'Escape' && isNavbarOpen) {
      setIsNavbarOpen(false);
      menuToggleRef.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isNavbarOpen]);

  /**
   * Block scrolling when menu is open and unblock when menu is closed.
   * This is done by adding/removing the 'no-scroll' class to the body.
   */

  useEffect(() => {
    isNavbarOpen ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
  }, [isNavbarOpen]);

  /**
   * Trap focus inside the menu when it is open.
   * When the menu is open, the focus is trapped inside the menuRef.
   */

  const handleFocus = (event) => {
    if (isNavbarOpen) {
      const focusableElements = menuRef.current.querySelectorAll('a[href], button');
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      if (event.target === lastFocusableElement && !event.shiftKey) {
        event.preventDefault();
        firstFocusableElement.focus();
      } else if (event.target === firstFocusableElement && event.shiftKey) {
        event.preventDefault();
        lastFocusableElement.focus();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleFocus);
    return () => document.removeEventListener('keydown', handleFocus);
  }, [isNavbarOpen]);

  /**
   * Close after clicking on a link.
   */

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <header className={style.header}>
      <div className="container">
        <nav className={style.header__nav} data-menu-open={isNavbarOpen} id="navbar">
          <Brand />

          <div className={style.menu} ref={menuRef}>
            <button className={style.menu__toggle} onClick={handleToggle} aria-expanded={isNavbarOpen} aria-label={isNavbarOpen ? 'Fechar menu' : 'Abrir menu'} aria-haspopup="true" type="button" ref={menuToggleRef}>
              <span className={style.menu__toggle__line} />
              <span className={style.menu__toggle__line} />
              <span className={style.menu__toggle__line} />
            </button>
            <div className={style.menu__wrapper} aria-hidden={!isNavbarOpen}>
              <div className="container">
                <ul className={style.menu__list} aria-label="Menu" role="menu">
                  <li className={style.menu__list__item}>
                    <a className={`link ${style.menu__list__link}`} href="/" onClick={handleLinkClick}>
                      Início
                    </a>
                  </li>
                  <li className={style.menu__list__item}>
                    <a className={`link ${style.menu__list__link}`} href="/#por-que-reciclar" onClick={handleLinkClick}>
                      Por que reciclar?
                    </a>
                  </li>
                  <li className={style.menu__list__item}>
                    <a className={`link ${style.menu__list__link}`} href="/onde-descartar/" onClick={handleLinkClick}>
                      Onde descartar?
                    </a>
                  </li>
                  <li className={style.menu__list__item}>
                    <a className={`link ${style.menu__list__link}`} href="https://docs.google.com/forms/d/e/1FAIpQLSfgJz_tUJcSYwrfeFvPi2J4R6IVz4XS768srHT82WIm2s_mnw/viewform" target="_blank" rel="noopener" onClick={handleLinkClick}>
                      Cadastro para empresas
                    </a>
                  </li>
                  <li className={style.menu__list__item}>
                    <a className={`link ${style.menu__list__link}`} href="mailto:recicla.ai.sorocaba@gmail.com" onClick={handleLinkClick}>
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

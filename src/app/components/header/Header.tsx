import React from 'react';

import { ReactComponent as HamburgerIcon } from '../../../assets/icons/hamburger-menu.svg';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles['header']}>
      <nav className={styles['header__links']}>
        <div className={styles['header__logo']}>
          <a>
            <span><i></i> MyAnt</span>
          </a>
        </div>
        <button className={styles['header__toggle__wrapper']} type="button"><HamburgerIcon className={styles['header__toggle__icon']}/></button>
        <ul className={styles['header__menu']}>
          <li className={styles['header__item']}><a href="#">Inicio</a></li>
          <li className={styles['header__item']}><a href="#">Acerca de</a></li>
          <li className={styles['header__item']}><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
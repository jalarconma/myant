import React from 'react';

import { ReactComponent as HamburgerIcon } from '../../../assets/icons/hamburger-menu.svg';

import styles from './Header.module.scss';
import useAuthPloc from '../../plocs/auth.ploc';
import { privateRoutes } from '../../AppRoutes';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const { user } = useAuthPloc();
  const routes = user ? [...privateRoutes] : null;

  const NavigationLogo = () => {
    const navRoute = user ? '/home' : '/welcome';

    return (
      <Link to={navRoute}><span><i></i>MyAnt</span></Link>
    )
  };

  return (
    <header className={styles['header']}>
      <nav className={styles['header__links']}>
        <div className={styles['header__logo']}>
          <NavigationLogo />
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
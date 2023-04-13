import { useEffect, useState } from 'react';

import { ReactComponent as HamburgerIcon } from '../../../assets/icons/hamburger-menu.svg';

import styles from './Header.module.scss';
import useAuthPloc from '../../plocs/auth.ploc';
import { privateRoutes } from '../../AppRoutes';
import { Link } from 'react-router-dom';
import useWindowResize from '../../hooks/use-window-resize';

function Header() {
  const { user } = useAuthPloc();
  const [showMenu, setShowMenu] = useState(false);
  const { breakpointsWithDimensions: breakpoints, dimensions } = useWindowResize();
  const moreThanMd = dimensions.width > breakpoints.md;
  const routes = user ? [...privateRoutes] : null;

  const NavigationLogo = () => {
    const navRoute = user ? '/home' : '/welcome';

    return (
      <Link to={navRoute}><span><i></i>MyAnt</span></Link>
    )
  };

  const onToggleMenu = () => {
    setShowMenu(prev => !prev);
  }

  useEffect(() => {
    moreThanMd ? setShowMenu(true) : setShowMenu(false);
  }, [moreThanMd])

  return (
    <header className={styles['header']}>
      <nav className={styles['header__links']}>
        <div className={styles['header__actions']}>
          <div className={styles['header__logo']}>
            <NavigationLogo />
          </div>
          <button className={styles['header__toggle__wrapper']} type="button" onClick={onToggleMenu}>
            <HamburgerIcon className={styles['header__toggle__icon']} />
          </button>
        </div>
        {showMenu && (
          <ul className={styles['header__menu']}>
            <li className={styles['header__item']}><a href="#">Inicio</a></li>
            <li className={styles['header__item']}><a href="#">Acerca de</a></li>
            <li className={styles['header__item']}><a href="#">Contacto</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
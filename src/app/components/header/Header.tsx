import { useEffect, useState } from 'react';

import { ReactComponent as HamburgerIcon } from '../../../assets/icons/hamburger-menu.svg';

import styles from './Header.module.scss';
import useAuthPloc from '../../plocs/auth.ploc';
import { privateRoutes } from '../../AppRoutes';
import { Link } from 'react-router-dom';
import useWindowResize from '../../hooks/use-window-resize';
import UserMenu from '../user-menu/UserMenu';
import { PRIVATE_MENU, PUBLIC_MENU } from '../../constants/nav-menu.constant';
import _ from 'lodash';

function Header() {
  const { user } = useAuthPloc();
  const [showMenu, setShowMenu] = useState(false);
  const { breakpointsWithDimensions: breakpoints, dimensions } = useWindowResize();
  const moreThanMd = dimensions.width > breakpoints.md;
  const navMenu = user ? PRIVATE_MENU : PUBLIC_MENU;

  const NavigationLogo = () => {
    const navRoute = '/';

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
          <div className={styles['header__menu_btn_wrapper']}>
            {!moreThanMd && (<UserMenu />)}
            <button className={styles['header__toggle__wrapper']} type="button" onClick={onToggleMenu}>
              <HamburgerIcon className={styles['header__toggle__icon']} />
            </button>
          </div>
        </div>
        {showMenu && (
          <ul className={styles['header__menu']}>
            {
              navMenu.map((route) => (<Link to={route.path as string} key={route.path} className={styles['header__item']}>{route.linkName}</Link>))
            }
            {moreThanMd && (<li><UserMenu /></li>)}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
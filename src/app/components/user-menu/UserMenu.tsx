import { useState } from "react";
import useAuthPloc from "../../plocs/auth.ploc";

import styles from './UserMenu.module.scss';
import { Link } from "react-router-dom";

function UserMenu() {
  const { user, googleLogin } = useAuthPloc();
  const [showMenu, setShowMenu] = useState(false);

  const onToggleMenu = () => {
    setShowMenu(prev => !prev);
  }

  return (
    <div className={styles['user-menu']}>
      {user && (
        <div className={styles['user-menu__profile-wrapper']}>
          <button id="userMenuBtn" type="button" className={styles['user-menu__profile-btn']} onClick={onToggleMenu}>{user.email}</button>
          {showMenu && (
            <div className={styles['user-menu__profile-menu']}>
              <ul aria-labelledby="userMenuBtn">
                <li>
                  <Link to="/sign-out"><span><i></i>Sign Out</span></Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
      {!user && (
        <button type="button" className={styles['user-menu__login-btn']} onClick={() => googleLogin()}>Login</button>
      )}
    </div>
  )
}

export default UserMenu;
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useRoutes } from 'react-router-dom';

import routes from '../../AppRoutes';
import styles from './Layout.module.scss';
import useAuthPloc from '../../plocs/auth.ploc';
import { useEffect } from 'react';

function Layout() {
  const element = useRoutes(routes);
  const { isAuthenticated, googleLogin } = useAuthPloc();

  useEffect(() => {
    authFlow();
  }, []);

  const authFlow = async () => {
    const isAuth = await isAuthenticated();
    if (!isAuth) {
      googleLogin();
    }
  }
  
  return (
    <div className={styles['layout']}>
      <Header />
      <main className={styles['layout__main']}>
        {element}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
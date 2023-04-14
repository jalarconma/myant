import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useRoutes } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '../../AppRoutes';
import styles from './Layout.module.scss';
import useAuthPloc from '../../plocs/auth.ploc';
import { useEffect, useState } from 'react';

function Layout() {
  const element = useRoutes(publicRoutes);
  const [pagesRoutes, setPagesRoutes] = useState(element);
  const { isAuthenticated, getAuthenticatedUser } = useAuthPloc();

  useEffect(() => {
    authFlow();
  }, []);

  const authFlow = async () => {
    const isAuth = await isAuthenticated();
    if (isAuth) {
      await getAuthenticatedUser();
      //element = useRoutes(privateRoutes); TODO generate the element dinamically
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
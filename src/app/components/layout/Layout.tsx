import { useEffect } from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import { publicRoutes, privateRoutes } from '../../AppRoutes';
import styles from './Layout.module.scss';
import useAuthPloc from '../../plocs/auth.ploc';


function Layout() {
  const { user, getAuthenticatedUser } = useAuthPloc();
  const element = useRoutes(user ? privateRoutes : publicRoutes);
  const navigate = useNavigate();

  useEffect(() => {
    getAuthenticatedUser();
  }, []);

  useEffect(() => {
    navigate('/');
  }, [user]);
  
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
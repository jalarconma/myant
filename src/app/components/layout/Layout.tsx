import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useRoutes } from 'react-router-dom';

import routes from '../../AppRoutes';
import styles from './Layout.module.scss';

function Layout() {
  const element = useRoutes(routes);
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
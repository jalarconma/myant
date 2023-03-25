import { RouteObject } from 'react-router-dom';
import Home from './components/home/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
];

export default routes;
import { Navigate } from 'react-router-dom';

import { RouteObjectExt } from './models/RouteObjectExt';
import WelcomePage from './pages/welcome/Welcome.page';
import SignOutPage from './pages/sign-out/SignOut.page';
import HomePage from './pages/home/Home.page';
import NotFoundPage from './pages/not-found/NotFound.page';

export const privateRoutes: RouteObjectExt[] = [
  {
    path: '/',
    element: <Navigate to="/home" replace />,
    linkName: ''
  },
  {
    path: '/home',
    element: <HomePage />,
    linkName: 'Home'
  },
  {
    path: '/sign-out',
    element: <SignOutPage />,
    linkName: 'Sign Out'
  },
  {
    path: '*',
    element: <NotFoundPage />,
    linkName: 'Not Found'
  }
];

export const publicRoutes: RouteObjectExt[] = [
  {
    path: '/',
    element: <Navigate to="/welcome" replace />,
    linkName: ''
  },
  {
    path: '/welcome',
    element: <WelcomePage />,
    linkName: 'Welcome'
  },
  {
    path: '/sign-out',
    element: <SignOutPage />,
    linkName: 'Sign Out'
  },
  {
    path: '*',
    element: <NotFoundPage />,
    linkName: 'Not Found'
  }
];
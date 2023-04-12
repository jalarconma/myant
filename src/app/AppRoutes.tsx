import { RouteObject } from 'react-router-dom';

import WelcomePage from './pages/welcome/Welcome.page';
import SignOutPage from './pages/sign-out/SignOut.page';
import HomePage from './pages/home/Home.page';

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
];

export const publicRoutes: RouteObject[] = [
  {
    path: '/welcome',
    element: <WelcomePage />
  },
  {
    path: '/sign-out',
    element: <SignOutPage />
  },
];